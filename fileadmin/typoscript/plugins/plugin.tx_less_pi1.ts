//less
plugin.tx_less_pi1 {
  lessDir = fileadmin/templates/css
  lessFiles.1.less = 
  
  //disable on production
  enable = {$common.develop}
}
page.9366 < plugin.tx_less_pi1