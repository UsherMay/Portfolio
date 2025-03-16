import {Document, Page, pdfjs} from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume(){
    return(
        <section
            id="resume"
            className="min-h-screen flex items-center justify-center py-20"     
        >

            <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                Curriculum vitæ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <Document
                        file={"/src/assets/CV_Yvon_COCKS.pdf"}
                        onLoadError={console.error}
                        style={{ width: '100vw', height:'auto'}}>
                            <Page pageIndex={0}/>
                    </Document>
                    {/* <ReactPDF
                        file={{
                            data: "/src/assets/CV_Yvon_COCKS.pdf"
                        }}
                    /> */}
                </div>
            </div>
        </section>
    );
}

export default Resume;