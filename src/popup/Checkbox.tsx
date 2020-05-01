import { Fragment, h, ComponentProps, ComponentType, JSX } from "preact";

type Props = ComponentProps<ComponentType<JSX.HTMLAttributes<HTMLInputElement>>> & {
  detail: string;
  label: string;
};

export const Checkbox = ({ detail, label, ...otherProps }: Props) => (
  <Fragment>
    <input type="checkbox" id={label} {...otherProps} />
    <label for={label}>{label}</label>
    <em>{detail}</em>
  </Fragment>
);
