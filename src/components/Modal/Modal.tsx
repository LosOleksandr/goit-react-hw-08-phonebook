import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
} from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"

type ModalProps = {
  children: ReactNode
  isModalShown: boolean
  showModal: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({ children, showModal, isModalShown }) => {
  const backdrop = useRef(null)

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (evt) => evt.code === "Escape" && showModal(false),
    )

    return window.removeEventListener(
      "keydown",
      (evt) => evt.code === "Escape" && showModal(false),
    )
  })

  const onBackdropClick = () => {
    showModal(false)
  }

  return (
    <>
      {isModalShown && (
        <div
          onClick={onBackdropClick}
          className="h-full grid place-items-center w-full absolute top-0 left-0 bg-black/50"
        >
          <div
            className="px-4 w-full relative sm:max-w-lg "
            onClick={(evt) => evt.stopPropagation()}
          >
            {children}
            <button
              onClick={() => showModal(false)}
              className="absolute top-4 right-8 hover:text-red-500 transition-colors"
            >
              <AiOutlineCloseCircle size={"1.5rem"} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
