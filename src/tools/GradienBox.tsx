import "./GradienBox.scss"
function GradienBox(props:any) {

  function pxToRem(pxValue: string): string {
    const parsedValue = parseInt(pxValue, 10);
    return `${parsedValue / 16}rem`;
  }
  return (
    <div className={props.absolute ? 'container-box container-box-absolute' : 'container-box'} style={{zIndex:props.zIndex, overflow: props.over === 1 ? 'hidden': 'visible' , width: pxToRem(props.mywidth),position: props.absolute ? 'absolute' : 'relative',  height: pxToRem(props.myheight), borderRadius: pxToRem(props.myborder)}}>
        <div className="main-box" style={{borderRadius: pxToRem(props.myborder)}}>
            {props.children}
        </div>
    </div>
  )
}

export default GradienBox