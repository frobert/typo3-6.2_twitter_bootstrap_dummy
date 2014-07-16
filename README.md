TYPO3 Twitter bootstrap 3.2 dummy
=================================

TYPO3 Twitter bootstrap 3.2 dummy

<b>Acces data:</b><br>
Username: <b>admin</b><br>
Password: <b>password</b><br>
Install tool password: <b>password</b>

<b>Extensions</b>
- autometa (modified for TYPO3 6.2, TODO: contact author)
- less
- vobi_fce (Custom FCEs)
- flux
- vhs
- fluidcontent
- fluidcontent_bootstrap
- sourceopt
- realurl

<b>Details</b><br>
Move to production:<br>
- Enable production env in Install Tool area
- Open constant editor in root page and change constant data to enable production

Add new FCEs:<br>
- Add new HTML templates inside EXT:vobi_fce/Resources/Private/Elements/
- see http://fluidtypo3.org/

TypoScript:<br>
- TypoScript is saved in files and included in root page template
- see fileadmin/typoscript/ folder
- IMPORTANT! Don't forget to disable public access to *.ts files on your web server
