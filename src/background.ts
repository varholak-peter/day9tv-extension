import { getObjDifference } from "./util";

const styleSheetMap = {
  contrast: "styles/contrast.css",
  form_scaling: "styles/form_scaling.css",
} as const;

const _loadCss = (tabId: number) => (styleSheet: string) => {
  chrome.tabs.insertCSS(tabId, {
    file: styleSheet,
  });
};

const _loadStyleSheets = (loader: ReturnType<typeof _loadCss>) => (
  config: Partial<Reducer.State>
) => {
  Object.entries(config).forEach(([key, isChecked]) => {
    if (!isChecked) {
      return;
    }

    const styleSheet = styleSheetMap[key as keyof typeof styleSheetMap];

    if (styleSheet) {
      loader(styleSheet);
    }
  });
};

const loadDay9tv = (tabId: number) => {
  const loadCss = _loadCss(tabId);
  const loadStyleSheets = _loadStyleSheets(loadCss);

  chrome.storage.local.get(["config"], ({ config }) => {
    loadStyleSheets(config);
  });

  chrome.storage.onChanged.addListener((changes) => {
    const { newValue, oldValue } = changes.config;

    const difference = getObjDifference(oldValue, newValue);

    loadStyleSheets(difference);
  });
};

const handleMessage = (message: Message, msgSender: chrome.runtime.MessageSender) => {
  const tabId = msgSender.tab?.id;

  // Don't use !tabId as it can be 0
  if (tabId === undefined) {
    return;
  }

  if (message.type === "LOAD_DAY9TV") {
    chrome.pageAction.show(tabId);
    loadDay9tv(tabId);
    return;
  }

  chrome.pageAction.hide(tabId);
};

chrome.runtime.onMessage.addListener(handleMessage);
