import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Flex, Heading, Icon, Text, Badge } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import ReactResponsiveCarousel from 'components/ReactResponsiveCarousel'
import Layout from 'components/Layout'
import NextHead from 'components/NextHead'
import Stepper from 'components/Stepper'
import AlterLink from 'components/AlterLink'
import { Constants } from 'data/content/constants'
import { Themes } from 'utils/images'
import { ThemeMagicMushroom } from 'utils/constants'
import Image from 'next/image'

const PLATFORM_NAME = {
  vscode: 'vscode'
  // 'windows-terminal': 'windows-terminal',
  // slack: 'slack',
  // chrome: 'chrome',
  // firefox: 'firefox'
}

interface ThemeColorProps {
  color: string,
  textColor: string
}

interface ColorBrandComponentProps {
  bgColor: string,
  textColor?: string
}

interface PhotoThemeComponentProps {
  id?: string,
  title: string,
  imgArr: string[],
  children?: ReactNode
}

const ColorBrandComponent = ({ bgColor, textColor }: ColorBrandComponentProps) => (
  <Flex
    p={1}
    w={'100%'}
    bg={bgColor}
    color={textColor}
    align={'center'}
    justify={'center'}
    borderWidth={1}
    borderStyle={'solid'}
    borderColor={'#e7e7e7d3'}
    fontSize={'lg'}
    letterSpacing={0.5}
    fontStyle={'italic'}
    fontWeight={'normal'}
  >
    {bgColor.toUpperCase()}
  </Flex>
)

const PhotoThemeComponent = ({ id, title, imgArr, children, ...props }: PhotoThemeComponentProps) => {
  return (
    <Flex
      id={id}
      direction={'column'}
      align={'flex-start'}
      justify={'flex-start'}
      w={'100%'}
      {...props}
    >
      <Heading
        as={'h3'}
        my={10}
      >
        {title}
      </Heading>
      {children && (
        <Flex
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
          w={'100%'}
          mb={10}
        >
          {children}
        </Flex>
      )}
      <ReactResponsiveCarousel>
        {imgArr.map((img: string, index: number) => (
          <div key={`${title}-${img}`}>
            <img src={img} alt={`${title} theme example ${index}`} />
          </div>
        ))}
      </ReactResponsiveCarousel>
    </Flex>
  )
}

const LinkBadge = ({ id }: {id: string}) => {
  const { pathname } = useRouter()
  return (
    <AlterLink
      href={`/${pathname}/#${id}`}
      textDecoration={'none'}
      mr={2}
      _hover={{
        opacity: 0.8
      }}
    >
      <Badge
        variant='outline'
      >
        {id}
      </Badge>
    </AlterLink>
  )
}

const MagicMushroomThemePage = () => {
  return (
    <Layout
      head={
        <NextHead
          title={'Braian Vaylet - Magic Mushroom Theme'}
          description={'Magic Mushroom Theme by Braian Vaylet'}
          canonical={Constants.magicmushroom}
        />
      }
    >
      <Flex
        w={'100%'}
        direction={'column'}
        align={'flex-start'}
        justify={'flex-start'}
      >
        {/* Section1: Presentation */}
        <Flex
          direction={['column-reverse', 'column-reverse', 'row', 'row']}
          justify={'space-between'}
          align={'center'}
          w={'100%'}
        >
          <Flex
            direction={'column'}
            align={'flex-start'}
            justify={'flex-start'}
            w={['100%', '100%', '60%', '60%']}
          >
            <Heading
              as={'h1'}
              fontSize={['3xl', '5xl', '5xl', '5xl']}
              fontWeight={'extrabold'}
              bgGradient={'linear(to-l, #bff8ee, #a683f9)'}
              bgClip={'text'}
            >
              Magic Mushroom THEME
            </Heading>
            <Text
              as={'h3'}
              fontSize={'xl'}
              lineHeight={1.2}
            >
              Un theme con 💜
            </Text>
            <Text
              as={'p'}
              mt={5}
              fontSize={'md'}
            >
              Hola, mi nombre es Braian Vaylet y soy un desarrollador amante de las tecnologías web. A continuación les presento <b>Magic Mushroom</b> un theme ✨mágico para VSCode.
            </Text>
            <AlterLink
              href={'https://github.com/BraianVaylet/magic-mushroom-theme'}
              mt={5}
              _hover={{
                color: '#e9a7f9'
              }}
            >
              <Flex
                align={'center'}
                fontSize={'2xl'}
              >
                <Icon as={FaGithub} />
                <Text ml={2}>Github</Text>
              </Flex>
            </AlterLink>
            <Flex
              width={'100%'}
              py={5}
              align={'flex-start'}
              justify={'flex-start'}
              wrap={'wrap'}
            >
              <LinkBadge id={PLATFORM_NAME.vscode} />
              {/* <LinkBadge id={PLATFORM_NAME['windows-terminal']} />
              <LinkBadge id={PLATFORM_NAME.slack} />
              <LinkBadge id={PLATFORM_NAME.chrome} />
              <LinkBadge id={PLATFORM_NAME.firefox} /> */}
            </Flex>
          </Flex>
          <Flex
            direction={'column'}
            align={['center', 'center', 'flex-end', 'flex-end']}
            justify={'center'}
            mb={[10, 10, 0, 0]}
            w={['100%', '100%', '40%', '40%']}
          >
            <Image
              src={Themes.magicmushroom.logos.default}
              alt={'Magic Mushroom Theme'}
              width={'300px'}
              height={'300px'}
              layout={'intrinsic'}
              priority={false}
            />
          </Flex>
        </Flex>

        <Stepper />

        {/* Section2: Colors */}
        <Flex
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
          w={'100%'}
        >
          <Heading
            as={'h3'}
            mb={10}
          >
            Paleta de colores
          </Heading>

          <Flex
            direction={'column'}
            align={'center'}
            justify={'flex-start'}
            w={'100%'}
          >
            {ThemeMagicMushroom.map((theme: ThemeColorProps) => (
              <ColorBrandComponent key={theme.color} bgColor={theme.color} textColor={theme.textColor}/>
            ))}
          </Flex>

        </Flex>

        <Stepper />

        {/* Section3: VSCode */}
        <Flex
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
          w={'100%'}
        >
          <PhotoThemeComponent
            id={PLATFORM_NAME.vscode}
            title={'Visual Studio Code'}
            imgArr={[Themes.magicmushroom.vscode.img1, Themes.magicmushroom.vscode.img2, Themes.magicmushroom.vscode.img3]}
          >
            <Text>
              👉
              <AlterLink
                href={'https://marketplace.visualstudio.com/items?itemName=BraianVaylet.magic-mushroom'}
                textDecoration={'underline'}
                ml={2}
                _hover={{
                  color: '#e9a7f9'
                }}
              >
                Download
              </AlterLink>
            </Text>
          </PhotoThemeComponent>

          {/* <PhotoThemeComponent
            id={PLATFORM_NAME['windows-terminal']}
            title={'Window 10 Terminal'}
            imgArr={[Themes.vdark.windowTerminal.img1, Themes.vdark.windowTerminal.img2, Themes.vdark.windowTerminal.img3]}
          />

          <PhotoThemeComponent
            id={PLATFORM_NAME.slack}
            title={'Slack'}
            imgArr={[Themes.vdark.slack.img1]}
          />

          <PhotoThemeComponent
            id={PLATFORM_NAME.chrome}
            title={'Chrome'}
            imgArr={[Themes.vdark.chrome.img1]}
          />

          <PhotoThemeComponent
            id={PLATFORM_NAME.firefox}
            title={'Firefox'}
            imgArr={[Themes.vdark.firefox.img1]}
          >
            <Text>
              👉
              <AlterLink
                href={'https://addons.mozilla.org/en-US/firefox/addon/v-dark-theme/'}
                textDecoration={'underline'}
                ml={2}
                _hover={{
                  color: '#e9a7f9'
                }}
              >
                Download
              </AlterLink>
            </Text>
          </PhotoThemeComponent> */}
        </Flex>

        <Stepper />

        {/* Section4: Help */}
        <Flex
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
          w={'100%'}
        >
          <Heading
            as={'h3'}
            mb={10}
          >
            Te gustaría ayudarme?
          </Heading>
          <Text>
            Si te gusta el theme y quieres ayudarme a continuar con su desarrollo y mantenimiento
            puedes hacerlo donando lo que tu prefieras a esta wallet. (Puede ser en BTC, ETH, BNB, USDT, DAI o CAKE.)
          </Text>
          <Text
            mt={2}
            fontSize={['xs', 'xs', '2xl', '2xl']}
            fontWeight='bold'
            color={'#8ee1d3'}
          >
            👉 {Constants.wallet}
          </Text>
        </Flex>

        <Stepper />

        {/* Section5: Bye! */}
        <Flex
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
          w={'100%'}
        >
          <Heading
            as={'h5'}
            fontSize={'1.5em'}
            mb={10}
            color={'#a683f9'}
          >
            Gracias por llegar hasta el final, espero que disfrutes el Theme y todo feedback ayuda! 😄...
          </Heading>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default MagicMushroomThemePage
