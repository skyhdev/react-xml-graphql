import React, { useEffect, useRef, useState } from 'react'
import Layout from '../shared/Layout'
import './dashboard.css'

function Dashboard() {
    const [drag, setDrag] = useState(false);
    const [file, setFile] = useState(null);
    const dropRef = useRef(null);
    const selectRef = useRef(null);
    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDrag(true);
        }
    }
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDrag(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            selectRef.current.files = e.dataTransfer.files;
            setFile(e.dataTransfer.files[0]);
        }
    }
    const onSelectFile = (e) => {
        setFile(selectRef.current.files[0]);
    }
    useEffect(() => {
        let div = dropRef.current
        div.addEventListener('dragenter', handleDragIn)
        div.addEventListener('dragover', handleDrag)
        div.addEventListener('drop', handleDrop)

        return () => {
            let div = dropRef.current
            div.removeEventListener('dragenter', handleDragIn)
            div.removeEventListener('dragover', handleDrag)
            div.removeEventListener('drop', handleDrop)
        }
    }, []);
    useEffect(() => {

    }, [file])

    return (
        <Layout>
            <div>
                <div className="container">
                    <div className="descContainer my-5 py-2 px-3 mb-3 border">
                        <div className="headerTitle mb-2">
                            hi
                        </div>
                        <div className="subHeaderTitle mb-2">
                            hi
                        </div>
                        <div className="descriptionText mb-2">
                            hi
                        </div>
                    </div>
                    <div className="fileUploadContainer" ref={dropRef}>
                        <div className="fileUploadContain"           >
                            <div className="fileUpload">
                                <div className="mb-2 dropText">Drop here...</div>
                                <div className="mb-2 fileInput">
                                    <input type="file" ref={selectRef} onChange={onSelectFile} />
                                </div>
                                <div>
                                    <button className="uploadBtn">Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;
