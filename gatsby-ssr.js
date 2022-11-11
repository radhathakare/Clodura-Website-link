import React from "react"

const bodyComponents = [
    <>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMF8PCJ" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
    </>

];

export function onRenderBody({ setPreBodyComponents }) {
    setPreBodyComponents(bodyComponents)
}