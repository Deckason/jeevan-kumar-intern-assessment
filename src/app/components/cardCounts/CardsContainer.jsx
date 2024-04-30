import React from 'react'
import styles from "./cards.module.css"
import Card from './Card'
import { MdGroups } from 'react-icons/md'
import { CgFileDocument } from "react-icons/cg";
import { RiCashFill } from "react-icons/ri";
import { FaMoneyCheckDollar } from 'react-icons/fa6'

const CardsContainer = () => {
  return (
    <div className={styles.container}>
        <Card
            title={"Consultant Count"}
            count={"90 / 900"}
            icon={<MdGroups />}
            containerBg={"#F5DAB7"}
            iconBg={"#FBEDD9"}
        />
        <Card
            title={"Consultations"}
            count={"11 / 25"}
            icon={<CgFileDocument />}
            containerBg={"#C9D2F6"}
            iconBg={"#E2E7FE"}
        />
        <Card
            title={"Labs"}
            count={"25 / 560"}
            icon={<RiCashFill />}
            containerBg={"#C2F3D2"}
            iconBg={"#DDFBE9"}
        />
        <Card
            title={"DietPlans"}
            count={"25 / 250"}
            icon={<FaMoneyCheckDollar />}
            containerBg={"#E7D7F8"}
            iconBg={"#F0E8FD"}
        />
    </div>
  )
}

export default CardsContainer