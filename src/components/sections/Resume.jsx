import { useCallback, useState } from 'react';
import {Document, Page, pdfjs} from 'react-pdf'
import { useResizeObserver } from '@wojtekmaj/react-hooks';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

function Resume(){

    const [containerRef, setContainerRef] = useState(null); // <HTMLElement | null>
    const [containerWidth, setContainerWidth] = useState(0); // <number>

    const maxWidth = 800;

    const onResize = useCallback((entries) => {
        const [entry] = entries;
    
        if (entry) {
          setContainerWidth(entry.contentRect.width);
        }
      }, []);
    

    return(
        <section
            id="resume"
            className="min-h-screen flex items-center justify-center py-20"     
        >

            {/* <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                Curriculum vitæ
            </h2> */}

            <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all" ref={setContainerRef}>
                    <Document
                        file={"/src/assets/CV_Yvon_COCKS.pdf"}
                        onLoadError={console.error}
                        //</div>style={{ width: '10vw', height:'auto'}}
                        width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                        height='auto'
                        >
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