import React from "react";


function Page({title, children}) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
      )
}

export default Page;