import Logo from 'components/Logo'
import Close from 'components/icons/Close'
import { LoginContext } from 'hooks/useLogin'
import NavbarLinks from './Links'

export type NavbarFlyoutProps = {
  flyoutVisible: boolean
  closeFlyout: () => unknown
  companyClicked: () => unknown
  testnetClicked: () => unknown
  companyVisible: boolean
  testnetVisible: boolean
  loginContext: LoginContext
}

export function NavbarFlyout({
  flyoutVisible,
  closeFlyout,
  companyClicked,
  testnetClicked,
  companyVisible,
  testnetVisible,
  loginContext,
}: NavbarFlyoutProps) {
  const navbarLinksProps = {
    companyClicked,
    testnetClicked,
    companyVisible,
    testnetVisible,
    loginContext,
  }
  return (
    <div
      className={`absolute z-50 h-screen w-screen bg-white text-black font-extended transition-all transform-gpu overflow-y-auto ${
        !flyoutVisible ? '-translate-x-full pb-6' : 'pb-32'
      } md:hidden`}
    >
      <div className="flex flex-col px-5 max-w-xl mx-auto">
        <div className="flex mt-7 mb-10 justify-between items-center">
          <div>
            <Logo fill="black" width={190} height={32} />
          </div>
          <button onClick={closeFlyout}>
            <Close />
          </button>
        </div>
        <NavbarLinks
          condensed
          className="leading-relaxed text-4xl"
          {...navbarLinksProps}
        />
      </div>
    </div>
  )
}

export default NavbarFlyout
