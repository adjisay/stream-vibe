import classNames from "classnames"
import "./Button.scss"
import Icon from "@/components/Icon"

const Button = (props) => {
  const {
    className,
    type = "button",
    href,
    mode = "",
    target,
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = "before",
    hasFillIcon,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      title={title}
      aria-label={title}
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      {...specificProps}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
