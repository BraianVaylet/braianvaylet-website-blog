import Logo from 'public/images/logo.webp'
import Perfil from 'public/images/perfil.webp'
import VSCodeImg1 from 'public/images/themes/vdark/vsc-img1.png'
import VSCodeImg2 from 'public/images/themes/vdark/vsc-img2.png'
import VSCodeImg3 from 'public/images/themes/vdark/vsc-img3.png'
import WindowTerminalImg1 from 'public/images/themes/vdark/wt-img1.png'
import WindowTerminalImg2 from 'public/images/themes/vdark/wt-img2.png'
import WindowTerminalImg3 from 'public/images/themes/vdark/wt-img3.png'

const Themes = {
  vdark: {
    vscode: {
      img1: VSCodeImg1,
      img2: VSCodeImg2,
      img3: VSCodeImg3
    },
    windowTerminal: {
      img1: WindowTerminalImg1,
      img2: WindowTerminalImg2,
      img3: WindowTerminalImg3
    }
  }
}

export {
  Logo,
  Perfil,
  Themes
}
