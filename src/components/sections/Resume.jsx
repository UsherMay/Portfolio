import { useCallback, useState } from 'react';
import { Document, Page, pdfjs} from 'react-pdf'
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;


function Resume(){
    // const [file, setFile] = useState('/src/assets/CV_Yvon_COCKS.pdf');
    const [numPages, setNumPages] = useState();
    const [containerRef, setContainerRef] = useState(null); // <HTMLElement | null>
    const [containerWidth, setContainerWidth] = useState(); // <number>

    const onResize = useCallback((entries) => {
        const [entry] = entries;
    
        console.log("onResize => entry.contentRect.width : ",entry.contentRect.width);
        if (entry) {

            setContainerWidth(entry.contentRect.width);
        }
      }, []);
    
    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    function onDocumentLoadSuccess( nextNumPages)  {
        setNumPages(nextNumPages);
      }

    return(
        <section
            id="resume"
            className="min-h-screen flex flex-col items-center py-20"     
        >
            
            <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                Curriculum vitæ
            </h2> 
            
            { console.log(containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth, containerWidth)/*className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"*/ }
             
                <div className="w-8/12 max-w-[calc(100%_-_2rem)] m-0.5 p-6 rounded border border-white/10 hover:-translate-y-1 transition-transform" ref={setContainerRef}> 
                {/* <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform' ref={setContainerRef}> */}
                        <Document
                            file={"/src/assets/CV_Yvon_COCKS_merged.pdf"}
                            // style={{ flexDirection: "cols" }}
                            onLoadError={console.error}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={options}
                            >
                                {Array.from(new Array(numPages), (_el, index) => (
                                              <Page
                                                key={`page_${index + 1}`}
                                                pageNumber={index + 1}
                                                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                                              />
                                            ))}
                                {/* <Page 
                                    pageIndex={0}
                                    width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                                /> */}
                        </Document>
                    
                </div>
                
            
        </section>
    );
}

export default Resume;