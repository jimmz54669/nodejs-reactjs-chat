import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '60baa063-7c45-48c2-bf8a-a95de6d441f4', props.user.username, props.user.secret
        );

    return <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
}

export default ChatsPage