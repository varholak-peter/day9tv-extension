export const getObjDifference = <T extends { [key: string]: any }>(obj1: T, obj2: T) =>
  Object.entries(obj2).reduce<Partial<T>>(
    (acc, [key, newValEntry]) => ({
      ...acc,
      ...(obj1[key] === newValEntry ? {} : { [key]: newValEntry }),
    }),
    {}
  );

export const log = (...msg: any[]) => {
  const page = chrome.extension.getBackgroundPage();

  if (page) {
    // @ts-ignore (Console does exist on Window object)
    page.console.log(...msg);
  }
};
