import { useCallback, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
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

function PdfSlider({pdfUrls}){

    const [pdfIndex, setPdfIndex] = useState(0);
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

    function showNextPdf(){
        setPdfIndex(idx => {
            if(idx == pdfUrls.length-1) return 0
            return idx+1
        })
    }

    function showPrevPdf(){
        setPdfIndex(idx => {
            if(idx == 0) return pdfUrls.length-1
            return idx-1
        })

    }
                        
    return(
        <div className="w-full h-full relative">    
            <div className="w-full h-full flex overflow-hidden">
                {pdfUrls.map(url => (

                    <Document
                        file={url}
                        onLoadError={console.error}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={options}
                        >
                            <Page 
                                pageIndex={0}
                                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                            />
                    </Document>
                    // <img key={url} src={url} className={`object-cover w-full h-full block shrink-0 grow-0 transition-transform duration-300 ease-in-out
                      
                    //     `} 
                    // style={{translate: `${-100*pdfIndex}%`}}
                    // />
                ))}
            </div>

            <button onClick={showPrevPdf} className="block absolute top-0 bottom-0 p-4 cursor-pointer left-0 
                            hover:bg-black/20 transition-colors duration-100 ease-in-out">
                <ArrowBigLeft className="stroke-white fill-black/50 w-8 h-8"/>
            </button>
            <button onClick={showNextPdf} className="block absolute top-0 bottom-0 p-4 cursor-pointer right-0 
                            hover:bg-black/20 transition-colors duration-100 ease-in-out">
                <ArrowBigRight className="stroke-white fill-black/50 w-8 h-8"/>
            </button>

            <div className="absolute bottom-2 left-1/2 transform -translate-1/2 flex gap-1">
                {pdfUrls.map((_,idx)=>(
                    <button key={idx} 
                            className="block w-4 h-4 cursor-pointer
                            hover:scale-120 transition-scale duration-100 ease-in-out"
                            onClick={()=>setPdfIndex(idx)}>
                                {idx == pdfIndex ? <CircleDot className="stroke-white fill-black/50 h-full w-full"/> : <Circle className="stroke-white fill-black/50 h-full w-full"/>}
                    </button>
                ))}
            </div>
            
        </div>
    );
}

export default PdfSlider;