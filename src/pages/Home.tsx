import HomeSection from "@components/HomeSection/HomeSection"
import Modal from "@components/Modal/Modal"
import PhonebookForm from "@components/PhonebookForm/PhonebookForm"
import SidebarList from "@components/SidebarList/SidebarList"
import { useState } from "react"

const Home = () => {
  const [isModalShown, setIsModalShown] = useState(false)

  return (
    <>
      <SidebarList />
      <HomeSection showModal={setIsModalShown} />
      <Modal isModalShown={isModalShown} showModal={setIsModalShown}>
        <PhonebookForm />
      </Modal>
    </>
  )
}

export default Home
