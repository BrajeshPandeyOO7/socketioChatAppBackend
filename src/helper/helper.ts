export const sendResponse = (data:any) => {
    return {
        ok: data ? true : false,
        result: data || undefined
    }
}