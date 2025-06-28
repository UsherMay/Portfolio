import { useCallback, useState } from 'react';
import { Document, Page, pdfjs} from 'react-pdf'
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;


function Resume(){
    //const [file, setFile] = useState("/src/assets/CV_Yvon_COCKS_merged.pdf");//'/src/assets/CV_Yvon_COCKS.pdf');
    
    const [numPages, setNumPages] = useState();
    const [containerRef, setContainerRef] = useState(null); // <HTMLElement | null>
    const [containerWidth, setContainerWidth] = useState(); // <number>

    const onResize = useCallback((entries) => {
        const [entry] = entries;
    
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
                Curriculum Vitæ
            </h2> 
             
                <div className="w-4/10 max-w-[calc(100%_-_2rem)] min-w-96 m-0.5 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform" ref={setContainerRef}> 

                        <p className='text-center text-gray-400 pb-6'>CV "Développeur Web"</p>
                        <Document
                            file={'/Portfolio/CV_Yvon_COCKS_Web.pdf'}
                            onLoadError={console.error}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={options}
                            >
                                <Page 
                                    pageIndex={0}
                                    width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                                />
                        </Document>
                    
                </div>
                
                <div className="w-4/10 max-w-[calc(100%_-_2rem)] min-w-96 m-0.5 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform" ref={setContainerRef}> 
                        
                        <p className='text-center text-gray-400 pb-6'>CV "Développeur Jeux Vidéo"</p>
                        <Document
                            file={'/Portfolio/CV_Yvon_COCKS_JV.pdf'}
                            onLoadError={console.error}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={options}
                            >
                                <Page 
                                    pageIndex={0}
                                    width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                                />
                        </Document>
                    
                </div>

                <div className="flex justify-center space-x-4 p-7">
                    <a 
                        href="/Portfolio/CV_Yvon_COCKS_Web.pdf" download="CV_Yvon_COCKS_Web"
                        className="bg-orange-500 text-white py-3 px-6 rounded 
                            font-medium transition relative overflow-hidden 
                            hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(239, 185, 48, 0.4)]
                            hover:bg-orange-300"
                    >
                        Télécharger CV "Développeur Web"
                    </a>
                    <a 
                        href="/Portfolio/CV_Yvon_COCKS_JV.pdf" download="CV_Yvon_COCKS_JV"
                        className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded 
                            font-medium transition-all duration-200
                            hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(239, 185, 48, 0.2)]
                            hover:bg-orange-500/10"
                    >
                        Télécharger CV "Jeux Vidéo"
                    </a>
                </div>
                
            
        </section>
    );
}

export default Resume;