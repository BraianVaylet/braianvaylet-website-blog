import { Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import ReactResponsiveCarousel from 'components/ReactResponsiveCarousel'
import CustomImage from 'components/Image/CustomImage'
import Layout from 'components/Layout'
import NextHead from 'components/NextHead'
import Stepper from 'components/Stepper'
import AlterLink from 'components/AlterLink'
import { Constants } from 'data/content/constants'
import { Logo, Themes } from 'utils/images'
import { ThemeVDark, ThemeVDarkCarrot, ThemeVDarkLemon } from 'utils/constants'

interface ThemeColorProps {
  color: string,
  textColor: string
}

const ColorBrand = ({ bgColor, textColor }: {bgColor: string, textColor?: string}) => (
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

const VDarkThemePage = () => {
  return (
    <Layout
      head={
        <NextHead
          title={'Braian Vaylet - V Dark Theme'}
          description={'V Dark Theme by Braian Vaylet'}
          canonical={Constants.vdark}
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
              bgGradient={'linear(to-l, brand.secondary, brand.primary)'}
              bgClip={'text'}
            >
              V DARK THEME
            </Heading>
            <Text
              as={'h3'}
              fontSize={'xl'}
              lineHeight={1.2}
            >
              Un theme con ❤
            </Text>
            <Text
              as={'p'}
              mt={5}
              fontSize={'md'}
            >
              Hola, mi nombre es Braian Vaylet y soy un desarrollador amante de las tecnologías web. A continuación les presento <b>V Dark</b> un theme basado en la paleta de colores de mi website <b><a href={Constants.web}>braianvaylet.dev</a></b>. Me base como inspiración en <b><a href={'https://github.com/daltonmenezes/aura-theme'}>Aura theme</a></b> y en la paleta de colores de <b><a href={'https://chakra-ui.com/'}>Chakra UI</a></b>.
            </Text>
            <AlterLink
              href={'https://github.com/BraianVaylet/v-dark-theme'}
              mt={5}
              _hover={{
                color: 'brand.secondary'
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
          </Flex>
          <Flex
            direction={'column'}
            align={['center', 'center', 'flex-end', 'flex-end']}
            justify={'center'}
            mb={[10, 10, 0, 0]}
            w={['100%', '100%', '40%', '40%']}
          >
            <CustomImage
              src={Logo.src}
              loading={'lazy'}
              alt={'Logo V Dark Theme'}
              w={'50%'}
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
            {ThemeVDark.map((theme: ThemeColorProps) => (
              <ColorBrand key={theme.color} bgColor={theme.color} textColor={theme.textColor}/>
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
          <Heading
            as={'h3'}
            mb={10}
          >
            Visual Studio Code
            <AlterLink
              href={'https://marketplace.visualstudio.com/items?itemName=BraianVaylet.v-dark'}
              textDecoration={'underline'}
              ml={2}
              _hover={{
                color: 'brand.secondary'
              }}
            >
              Marketplace
            </AlterLink>
          </Heading>

          <ReactResponsiveCarousel>
            <div>
              <img src={Themes.vdark.vscode.img1} alt={'VSCode theme example 1'} />
            </div>
            <div>
              <img src={Themes.vdark.vscode.img2} alt={'VSCode theme example 2'} />
            </div>
            <div>
              <img src={Themes.vdark.vscode.img3} alt={'VSCode theme example 3'} />
            </div>
          </ReactResponsiveCarousel>

          <Heading
            as={'h3'}
            my={10}
          >
            Window 10 Terminal
          </Heading>

          <ReactResponsiveCarousel>
            <div>
              <img src={Themes.vdark.windowTerminal.img1} alt={'Window Terminal theme example 1'} />
            </div>
            <div>
              <img src={Themes.vdark.windowTerminal.img2} alt={'Window Terminal theme example 2'} />
            </div>
            <div>
              <img src={Themes.vdark.windowTerminal.img3} alt={'Window Terminal theme example 3'} />
            </div>
          </ReactResponsiveCarousel>

          <Heading
            as={'h3'}
            my={10}
          >
            Slack
          </Heading>
          <div>
            <img src={Themes.vdark.slack.img1} alt={'slack theme example 1'} />
          </div>

          <Heading
            as={'h3'}
            my={10}
          >
            Chrome
          </Heading>
          <div>
            <img src={Themes.vdark.chrome.img1} alt={'chrome theme example 1'} />
          </div>
        </Flex>

        <Stepper />

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
            Prueba sus nuevas variantes
          </Heading>

          <Flex
            align={'center'}
            justify={'space-between'}
            w={'100%'}
          >
            <Flex
              direction={'column'}
              align={'center'}
              justify={'flex-start'}
              w={'40%'}
            >
              <CustomImage
                src={Themes.vdark.logos.carrot}
                loading={'lazy'}
                alt={'Logo V Dark Carrot Theme'}
                w={'25%'}
              />
              <Heading as={'h4'}>
                Carrot
              </Heading>
              <Flex
                direction={'column'}
                align={'center'}
                justify={'flex-start'}
                w={'100%'}
              >
                {ThemeVDarkCarrot.map((theme: ThemeColorProps) => (
                  <ColorBrand key={theme.color} bgColor={theme.color} textColor={theme.textColor}/>
                ))}
              </Flex>
            </Flex>

            <Flex
              direction={'column'}
              align={'center'}
              justify={'flex-start'}
              w={'40%'}
            >
              <CustomImage
                src={Themes.vdark.logos.lemon}
                loading={'lazy'}
                alt={'Logo V Dark Lemon Theme'}
                w={'25%'}
              />
              <Heading as={'h4'}>
                Lemon
              </Heading>
              <Flex
                direction={'column'}
                align={'center'}
                justify={'flex-start'}
                w={'100%'}
              >
                {ThemeVDarkLemon.map((theme: ThemeColorProps) => (
                  <ColorBrand key={theme.color} bgColor={theme.color} textColor={theme.textColor}/>
                ))}
              </Flex>
            </Flex>
          </Flex>

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
            color={'brand.primary'}
          >
            Gracias por llegar hasta el final, espero que disfrutes el Theme y todo feedback ayuda! 😄...
          </Heading>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default VDarkThemePage
