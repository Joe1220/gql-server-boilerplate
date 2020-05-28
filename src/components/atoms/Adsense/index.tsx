import React, { useState } from "react"
import { isClient } from "src/shared/config"

const Adsense: React.FC = () => {
  useState(() => {
    try {
      if (isClient) {
        window.adsbygoogle.push({
          google_ad_client: process.env.GG_AD_CODE,
          enable_page_level_ads: true,
        })
      }
    } catch (err) {
      console.log("error")
    }
  })

  return (
    <div>
      hello
      <ins
        data-ad-client={process.env.GG_AD_CODE}
        data-ad-slot="6259591966"
        data-ad-format="auto"
        style={{ display: "block" }}
      />
    </div>
  )
}

export default Adsense
