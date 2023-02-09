import PDF from "./pdf"
const Route = (app) => {
    app.post('/pdf',PDF.pdf)
}
export default Route 