/** @jsx h */

/** hyperscript generator */
function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;

  return { nodeName, attributes, children };
}

/** Render Virtual DOM to the real DOM */
function render(vnode){
    if(vnode.split) return document.createTextNode(vnode)

    let n = document.createElement(vnode.nodeName)

    let a = vnode.attributes || {};

    Object.keys(a).forEach((k) => n.setAttribute(k, a[k]));

    // loop through the children and call render on each of them
    ( vnode.children || [] ).forEach( c => n.appendChild(render(c)) );

    return n;
}

const vdom = (<div id='foo'>--</div>);
const dom = render(vdom);

document.body.appendChild(dom);
