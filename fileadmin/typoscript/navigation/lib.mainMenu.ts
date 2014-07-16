lib.mainMenu = HMENU
lib.mainMenu {
  wrap = |
  entryLevel = 0

  1 = TMENU
  1 {
    wrap = <ul class="nav navbar-nav">|</ul>
    NO {
      allWrap = <li>|</li>
    }

    ACT = 1
    ACT{
      allWrap = <li class="active">|</li>
    }
  }
}