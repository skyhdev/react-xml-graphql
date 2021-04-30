import React, { useEffect, useRef, useState } from 'react';
import Layout from '../shared/Layout';
import './welcome.css';
import { useTranslation } from 'react-i18next';

function Welcome() {
    const { t } = useTranslation();
    const [drag, setDrag] = useState(false);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("")
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
        if (selectRef?.current?.files && selectRef.current.files.length) {
            setFile(selectRef.current.files[0]);
        }
    }
    useEffect(() => {
        let div = dropRef.current
        div.addEventListener('dragenter', handleDragIn)
        div.addEventListener('dragover', handleDrag)
        div.addEventListener('drop', handleDrop)

        return () => {
            let div = dropRef.current
            if (div) {
                div.removeEventListener('dragenter', handleDragIn)
                div.removeEventListener('dragover', handleDrag)
                div.removeEventListener('drop', handleDrop)
            }
        }
    }, []);
    useEffect(() => {
        if (file?.name) {
            setFileName(file.name);
        }
    }, [file])

    const openImgUpload = () => {
        selectRef.current.click();
    }

    return (
        <Layout active="Welcome">
            <div>
                <div className="container">
                    <div className="descContainer my-5 py-2 px-3 mb-3 border">
                        <div className="headerTitle mb-1">
                            {t('UploadTitle')}
                        </div>
                        <div className="subHeaderTitle mb-1">
                            {t('UploadSubTitle')}
                        </div>
                        <div className="descriptionText mb-1">
                            {t('UploadDesc')}
                        </div>
                    </div>
                    <div className="fileUploadContainer" ref={dropRef}>
                        <div className="fileUploadContain"           >
                            <div className="fileUpload">
                                <div className="mb-2 dropText">{t('DropHere')}</div>
                                <div className="mb-2 fileInput">
                                    <input type="file" id="file" className="fileInputTag" ref={selectRef} onChange={onSelectFile} />
                                    <img src={process.env.PUBLIC_URL + '/undraw_File_sync.svg'} className="uploadImg" onClick={openImgUpload}></img>
                                </div>
                                <div className="mb-3">
                                    {fileName}
                                </div>
                                <div>
                                    <button className="uploadBtn" onClick="">{t('Upload')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Welcome;
