import React from "react"

import IconXing from "./xing"
import IconLinkedIn from "./linkedin"
import IconMedium from "./medium"
import IconGitHub from "./github"
import IconBehance from "./behance"
import IconExternal from "./external"
import IconTwitter from "./twitter"
import IconInstagram from "./instagram"

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "xing":
      return <IconXing color={color} />
    case "linkedin":
      return <IconLinkedIn color={color} />
    case "medium":
      return <IconMedium color={color} />
    case "github":
      return <IconGitHub color={color} />
    case "twitter":
      return <IconTwitter color={color} />
    case "instagram":
      return <IconInstagram color={color} />
    case "behance":
      return <IconBehance color={color} />
    case "external":
      return <IconExternal color={color} />
    default:
      return null
  }
}

export default Icon;