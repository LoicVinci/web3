import { ProviderWrapper as VotesProviderWrapper } from "../../contexts/VotesContext"
import App from "../App/App"

const AppLoader = () => {
  
    return (
      <VotesProviderWrapper >
        <App />
        </VotesProviderWrapper>
    )
  }

export default AppLoader