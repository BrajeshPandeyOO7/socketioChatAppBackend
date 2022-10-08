import { Socket } from "socket.io";

const deliver = async (socket:Socket, payload:any) => {
    const {from, data, to } = payload;
    (() => {
        socket.emit(from, {identity: 'right',data});
        console.log('from: ',data)
    })();

    (() => {
        socket.emit(to, {identity: 'left', data});
    })()
}

export default deliver;
