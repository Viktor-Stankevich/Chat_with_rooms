import { useContext } from "react"
import { JoinContext } from "../hoc/JoinProvider"

export const useJoin = () => {
    return useContext(JoinContext)
}