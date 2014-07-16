#main domain
domain = dumi.vobi.si

#DEV domain
[globalVar=IENV:TYPO3_HOST_ONLY=dev-dumi.vobi.si]
  domain = dev-dumi.vobi.si
[GLOBAL]

### meta ###
plugin.meta {
  robots = all
  copyright = VOBI
  revisit = 7
  googleVerify = 

  viewport = width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0
  apple-mobile-web-app-capable = yes
  apple-mobile-web-app-status-bar-style = black
  apple-mobile-web-app-title = VOBI
  cleartype = on
  MobileOptimized = 320
}

#prod/dev switch
common {
  noCache = 1
  production = 0
  develop = 1
  rand = ?01
}