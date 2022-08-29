export function getClasses(props:{[index: string]: any}, styles: any):{[index: string]: any} {
  return Object.keys(props).reduce((classList:any, key) => {
    if (typeof props[key]==="boolean" && props[key]) {
      classList[key] = styles[key]
    }
    else if(typeof props[key]==="string" && key === 'className') {
      classList[key] = props[key]
    }
    return Object.values(classList);
  },{});
}
