import LightningIcon from "../public/svg/lightning.svg"
import FillPollIcon from "../public/svg/Fill Poll Icon.svg"
import VoteChainHorizontalIcon from "../public/svg/Votechain Logo.png"
import LoginIcon from "../public/svg/Login.png"
import HistoryIcon from "../public/svg/time.svg"
import DashboardIcon from "../public/svg/Dashboard Icon.svg"
import ToggleIcon from "../public/svg/Toggle Button.svg"
import CreatePollIcon from "../public/svg/Create Poll Icon.svg"
import LogoIcon from "../public/svg/logo.png"
import BarChartCircleIcon from "../public/svg/barchart.svg"
import RadialSmallIcon from "../public/svg/radial-small.svg"
import RadialIcon from "../public/svg/radial.svg"
import ZapIcon from "../public/svg/Zap.svg"
import RateIcon from "../public/svg/rate.svg"
import RadioCircleIcon from "../public/svg/radio-circle.svg"
import RadioSelectedIcon from "../public/svg/radio-selected.svg"
import Image from "next/image"

export const Lightning = <Image src={LightningIcon}/>
export const VoteChainHorizontal = <Image src={VoteChainHorizontalIcon} width={150} height={80}/>
export const Login = <Image src={LoginIcon}/>
export const Logo = <Image src={LogoIcon}/>
export const BarChartCircle = <Image src={BarChartCircleIcon}/>
export const RadialSmall = <Image src={RadialSmallIcon}/>
export const Radial = <Image src={RadialIcon}/>
export const Zap = <Image src={ZapIcon}/>
export const Rate = <Image src={RateIcon}/>
export const RadioCircle = <Image src={RadioCircleIcon}/>
export const RadioSelected = <Image src={RadioSelectedIcon}/>

export const Dashboard = <Image src={DashboardIcon}/>
export const Toggle = <Image src={ToggleIcon}/>
export const CreatePoll = <Image src={CreatePollIcon} className="text-white"/>
export const FillPoll = <Image src={FillPollIcon}/>
export const History = <Image src={HistoryIcon}/>