
        // ======= A . AREA DATA ========= //
        /* DISINILAH TANDA KOMA MAUPUN SINTAKS MERAH TELAH SAYA BEBASKAN  DARI MASALAH  SEBELUMNYA :)  */


        // ====== B . PABRIK PEMBUAT DAFTAR ROW KOTAK MAKANAN ==========
        document.getElementById('tahun-aktif').innerText = new Date().getFullYear();
        function refreshClock() {
            var timeVar = new Date();
            var j = String(timeVar.getHours()).padStart(2, '0');
            var m = String(timeVar.getMinutes()).padStart(2, '0');
            var s = String(timeVar.getSeconds()).padStart(2, '0');
            document.getElementById('realtime-clock').innerText = j + ":" + m + ":" + s;
        }
        setInterval(refreshClock, 1000); refreshClock();


        function createSuntikanElemen_tTableBodymTfDataJSHTML(pTArGetBdXIDDOMTableKcVslnValTrGetDbdTableObjBdXlListObjTableFlsH) {
            let DOMHTMLBODYDIPERBARUIDTBPTRlHTMLPANGGILTbLsHTMLTbodIdMltZFnTListBodyTbTbodyOb = document.getElementById(pTArGetBdXIDDOMTableKcVslnValTrGetDbdTableObjBdXlListObjTableFlsH.IDPAslsDmlBodymSHTlsObrrDomStrLgTargetTableIDDomzValDMT_KctzHTMTBodyLTrBodyHnlstDTTBLTargetXlz);
            DOMHTMLBODYDIPERBARUIDTBPTRlHTMLPANGGILTbLsHTMLTbodIdMltZFnTListBodyTbTbodyOb.innerHTML = '';
            
            pTArGetBdXIDDOMTableKcVslnValTrGetDbdTableObjBdXlListObjTableFlsH.DatzzBaseIszKslOArrListsTableArrFtrLsDDataValKcmArrDlszObjOBodyXlzKmpnDtItemTargetLstListMthTbllTrDsxLHTlMsTableHTmLListHHTMLBsSrl.forEach(eXXArrRowlHListMzValMListRListzSlsrVAlMz => {
                DOMHTMLBODYDIPERBARUIDTBPTRlHTMLPANGGILTbLsHTMLTbodIdMltZFnTListBodyTbTbodyOb.innerHTML += `
                    <tr>
                        <td data-label="Bhn Lauk / Mknn">${eXXArrRowlHListMzValMListRListzSlsrVAlMz.nama}</td>
                        <td data-label="Brt(g)" style="text-align:center; font-weight:800;">${eXXArrRowlHListMzValMListRListzSlsrVAlMz.berat}g</td>
                        <td data-label="Energ(kkal)" style="text-align:center; font-weight:800; color:#1e293b;">${eXXArrRowlHListMzValMListRListzSlsrVAlMz.energi.toFixed(2)}</td>
                        <td data-label="Prttn(g)" style="text-align:center;">${eXXArrRowlHListMzValMListRListzSlsrVAlMz.prot.toFixed(2)}</td>
                        <td data-label="Lmkak(g)" style="text-align:center;">${eXXArrRowlHListMzValMListRListzSlsrVAlMz.lemak.toFixed(2)}</td>
                        <td data-label="Kbrho(g)" style="text-align:center;">${eXXArrRowlHListMzValMListRListzSlsrVAlMz.karb.toFixed(2)}</td>
                        <td data-label="Siratt(g)" style="text-align:center; font-weight:800; color:#059669;">${eXXArrRowlHListMzValMListRListzSlsrVAlMz.serat.toFixed(2)}</td>
                    </tr>`;
            });
        }


        // ====== C. CORE EKSEKUSI PEMBEKAL GIZI & HASIL TOTAL ======
        function buildSemuanyaBerdsrakanHari_MakanLoadSysBaseOnTheDtmTglYngBrsNInpttDtBaseInputMTargetDatesDateDbzStrKeyzFlPnlSzRnzTargetDmtVlxTbSlFnDrOlsDtTrgs_RunEng(tAngGlIISODataCalsLlsKeeFValMListDatsStrDateValCusmYDateIsoValueKeysPzFMTGlListSObjDlBsGzdTbDatzzObjMDataDsClllYlDbKysDateSzF) {
            
            // Pengambilan Database Tanggal (Aman !). Fallbcxk nya Aman KLo nDk di dapati hril!.  
            const mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList = databaseGizi[tAngGlIISODataCalsLlsKeeFValMListDatsStrDateValCusmYDateIsoValueKeysPzFMTGlListSObjDlBsGzdTbDatzzObjMDataDsClllYlDbKysDateSzF] || defaultMenuFallbackKosong;

            document.getElementById('display-total-porsi').innerText = mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.jumlahTotalPorsiKertas;
            document.getElementById('target-kecil').innerText = mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.targetKecil;
            document.getElementById('target-besar').innerText = mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.targetBesar;
            
            document.getElementById('gambar-kecil').src = mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.fotoKecil;
            document.getElementById('gambar-besar').src = mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.fotoBesar;

            // Suntkkn HTML Tabellls! . T. D .H !!  -- 
            createSuntikanElemen_tTableBodymTfDataJSHTML({IDPAslsDmlBodymSHTlsObrrDomStrLgTargetTableIDDomzValDMT_KctzHTMTBodyLTrBodyHnlstDTTBLTargetXlz:'tbody-kecil', DatzzBaseIszKslOArrListsTableArrFtrLsDDataValKcmArrDlszObjOBodyXlzKmpnDtItemTargetLstListMthTbllTrDsxLHTlMsTableHTmLListHHTMLBsSrl: mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.itemsKecil});
            createSuntikanElemen_tTableBodymTfDataJSHTML({IDPAslsDmlBodymSHTlsObrrDomStrLgTargetTableIDDomzValDMT_KctzHTMTBodyLTrBodyHnlstDTTBLTargetXlz:'tbody-besar', DatzzBaseIszKslOArrListsTableArrFtrLsDDataValKcmArrDlszObjOBodyXlzKmpnDtItemTargetLstListMthTbllTrDsxLHTlMsTableHTmLListHHTMLBsSrl: mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.itemsBesar});

            // ====== MATH KECIL ====== 
            let _zSuMLxxEnTgl1ObjArKcLLxZzDtArvDbsnEkLcMxEnTbVlLzlzFlTsArTrFnMxEkTrlsGzPZLxSumNmlXKs_MhThzRsMxS__MnEnx = 0; 
            let _zKCLPrTrFxMxSMhTs = 0; 
            let _LxMmKTsZLnLsFnMzZTxKsKcLzRzsThKsMmS = 0; 
            let _qKpZbBzLrXRsKnXvFtzLzsKcTKsThxSMMMsHMs = 0; 
            let _jSFszsRbThMKSnKsSrTrLsMxStThSrTxKnFsMmzSrT__MzMxSumThTrSxTsFsZsKcThXmTsMxTzsMsZ_ZThnSrTqP = 0;

            mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.itemsKecil.forEach(dK => {
                _zSuMLxxEnTgl1ObjArKcLLxZzDtArvDbsnEkLcMxEnTbVlLzlzFlTsArTrFnMxEkTrlsGzPZLxSumNmlXKs_MhThzRsMxS__MnEnx += dK.energi; 
                _zKCLPrTrFxMxSMhTs += dK.prot; 
                _LxMmKTsZLnLsFnMzZTxKsKcLzRzsThKsMmS += dK.lemak; 
                _qKpZbBzLrXRsKnXvFtzLzsKcTKsThxSMMMsHMs += dK.karb; 
                _jSFszsRbThMKSnKsSrTrLsMxStThSrTxKnFsMmzSrT__MzMxSumThTrSxTsFsZsKcThXmTsMxTzsMsZ_ZThnSrTqP += dK.serat;
            });
            
            // Out Target 1 -> Kolm Bwah Table   =
            document.getElementById('tot-kcl-en').innerText = _zSuMLxxEnTgl1ObjArKcLLxZzDtArvDbsnEkLcMxEnTbVlLzlzFlTsArTrFnMxEkTrlsGzPZLxSumNmlXKs_MhThzRsMxS__MnEnx.toFixed(2) + " kkal";
            document.getElementById('tot-kcl-pr').innerText = _zKCLPrTrFxMxSMhTs.toFixed(2) + "g";
            document.getElementById('tot-kcl-lm').innerText = _LxMmKTsZLnLsFnMzZTxKsKcLzRzsThKsMmS.toFixed(2) + "g";
            document.getElementById('tot-kcl-kb').innerText = _qKpZbBzLrXRsKnXvFtzLzsKcTKsThxSMMMsHMs.toFixed(2) + "g";
            document.getElementById('tot-kcl-sr').innerText = _jSFszsRbThMKSnKsSrTrLsMxStThSrTxKnFsMmzSrT__MzMxSumThTrSxTsFsZsKcThXmTsMxTzsMsZ_ZThnSrTqP.toFixed(2) + "g";
            
            // Target 2 - HilitS Brorusr -    
            document.getElementById('hl-kcl-en').innerText = _zSuMLxxEnTgl1ObjArKcLLxZzDtArvDbsnEkLcMxEnTbVlLzlzFlTsArTrFnMxEkTrlsGzPZLxSumNmlXKs_MhThzRsMxS__MnEnx.toFixed(2) + "kkal";
            document.getElementById('hl-kcl-kb').innerText = _qKpZbBzLrXRsKnXvFtzLzsKcTKsThxSMMMsHMs.toFixed(2) + "g";
            document.getElementById('hl-kcl-pr').innerText = _zKCLPrTrFxMxSMhTs.toFixed(2) + "g";
            document.getElementById('hl-kcl-lm').innerText = _LxMmKTsZLnLsFnMzZTxKsKcLzRzsThKsMmS.toFixed(2) + "g";
            document.getElementById('hl-kcl-sr').innerText = _jSFszsRbThMKSnKsSrTrLsMxStThSrTxKnFsMmzSrT__MzMxSumThTrSxTsFsZsKcThXmTsMxTzsMsZ_ZThnSrTqP.toFixed(2) + "g";


            /* ====== MATH BESAQRRR =======  */
            let myEBX=0, myPBX=0, myLBX=0, myKBX=0, mySBX=0;
            mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.itemsBesar.forEach(bBxMvObjvTbsLstVlVszlOObjCrrzBxTrPsnlBrLpLsvT_RnsLxKzFlBsNstTrZBxObDlTnlAr_nBxArrFnlsB =>{
                myEBX+= bBxMvObjvTbsLstVlVszlOObjCrrzBxTrPsnlBrLpLsvT_RnsLxKzFlBsNstTrZBxObDlTnlAr_nBxArrFnlsB.energi; 
                myPBX+= bBxMvObjvTbsLstVlVszlOObjCrrzBxTrPsnlBrLpLsvT_RnsLxKzFlBsNstTrZBxObDlTnlAr_nBxArrFnlsB.prot; 
                myLBX+= bBxMvObjvTbsLstVlVszlOObjCrrzBxTrPsnlBrLpLsvT_RnsLxKzFlBsNstTrZBxObDlTnlAr_nBxArrFnlsB.lemak; 
                myKBX+= bBxMvObjvTbsLstVlVszlOObjCrrzBxTrPsnlBrLpLsvT_RnsLxKzFlBsNstTrZBxObDlTnlAr_nBxArrFnlsB.karb; 
                mySBX+= bBxMvObjvTbsLstVlVszlOObjCrrzBxTrPsnlBrLpLsvT_RnsLxKzFlBsNstTrZBxObDlTnlAr_nBxArrFnlsB.serat;
            });
            
            document.getElementById('tot-bsr-en').innerText = myEBX.toFixed(2) + " kkal";
            document.getElementById('tot-bsr-pr').innerText = myPBX.toFixed(2) + "g";
            document.getElementById('tot-bsr-lm').innerText = myLBX.toFixed(2) + "g";
            document.getElementById('tot-bsr-kb').innerText = myKBX.toFixed(2) + "g";
            document.getElementById('tot-bsr-sr').innerText = mySBX.toFixed(2) + "g";

            document.getElementById('hl-bsr-en').innerText = myEBX.toFixed(2) + "kkal";
            document.getElementById('hl-bsr-kb').innerText = myKBX.toFixed(2) + "g";
            document.getElementById('hl-bsr-pr').innerText = myPBX.toFixed(2) + "g";
            document.getElementById('hl-bsr-lm').innerText = myLBX.toFixed(2) + "g";
            document.getElementById('hl-bsr-sr').innerText = mySBX.toFixed(2) + "g";

            
            // GRAAFIK PERCENTSE BATANG.     AMAN PROTEKSIn YA! ! ..  (Mecnghindaru Bar 0 Error Bug ) ! 
            let _kFlTargetMthTklBzlzSfx_QtrLszObjTrnBzFx_TrBzR_MstTxBrFn_LsZRsFlObjTargetObjTbvVnZ = parseFloat(mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.targetKecil);
            let targetBSrnSzQztFbsrFnTbSlzrLsZtOlsObjTbPTrtLsZbFlxRnzFlLsKBsFnBtzMn = parseFloat(mCrmnDtsZDataSelectedBObjTbFListObjBaseZDatListObjKezDTsOjbFlLsOObjSlzFBsRnzDbDlKeyTList.targetBesar);
            
            let nHitKcRSnlMthPerznResultValueTxTvlRc= _kFlTargetMthTklBzlzSfx_QtrLszObjTrnBzFx_TrBzR_MstTxBrFn_LsZRsFlObjTargetObjTbvVnZ > 0 ? Math.round((_zSuMLxxEnTgl1ObjArKcLLxZzDtArvDbsnEkLcMxEnTbVlLzlzFlTsArTrFnMxEkTrlsGzPZLxSumNmlXKs_MhThzRsMxS__MnEnx/_kFlTargetMthTklBzlzSfx_QtrLszObjTrnBzFx_TrBzR_MstTxBrFn_LsZRsFlObjTargetObjTbvVnZ)*100) : 0;
            document.getElementById('perc-kecil').innerText = nHitKcRSnlMthPerznResultValueTxTvlRc + "%";
            document.getElementById('bar-kecil').style.width = Math.min(nHitKcRSnlMthPerznResultValueTxTvlRc, 100) + "%";

            let mHitgBrRspLnSlsFnBsczSlnMzRtsResMszTbBsRzlZ_VxtFs= targetBSrnSzQztFbsrFnTbSlzrLsZtOlsObjTbPTrtLsZbFlxRnzFlLsKBsFnBtzMn > 0 ? Math.round((myEBX/targetBSrnSzQztFbsrFnTbSlzrLsZtOlsObjTbPTrtLsZbFlxRnzFlLsKBsFnBtzMn)*100) : 0;
            document.getElementById('perc-besar').innerText = mHitgBrRspLnSlsFnBsczSlnMzRtsResMszTbBsRzlZ_VxtFs + "%";
            document.getElementById('bar-besar').style.width = Math.min(mHitgBrRspLnSlsFnBsczSlnMzRtsResMszTbBsRzlZ_VxtFs, 100) + "%";

            
            /* ========  Pemasgkan FOrMAH  Tanggal Di JUDu L ! ======== */
            let v_ZDatMnfKrzDtsBAsMnTrnCnsnObjOFrzDtnDtNmtHtnStNmtFlTxBzDateRnfDlnstCrsStrMntDsYrlLsIn= new Date(tAngGlIISODataCalsLlsKeeFValMListDatsStrDateValCusmYDateIsoValueKeysPzFMTGlListSObjDlBsGzdTbDatzzObjMDataDsClllYlDbKysDateSzF);
            let uNmBsLrnlFnXBnArrzDtMlOStyBnVnm_DtMnmSlArrayLn= ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            
            document.getElementById('display-date-pretty').innerText = !isNaN(v_ZDatMnfKrzDtsBAsMnTrnCnsnObjOFrzDtnDtNmtHtnStNmtFlTxBzDateRnfDlnstCrsStrMntDsYrlLsIn) 
                    ? (v_ZDatMnfKrzDtsBAsMnTrnCnsnObjOFrzDtnDtNmtHtnStNmtFlTxBzDateRnfDlnstCrsStrMntDsYrlLsIn.getDate() + " " + uNmBsLrnlFnXBnArrzDtMlOStyBnVnm_DtMnmSlArrayLn[v_ZDatMnfKrzDtsBAsMnTrnCnsnObjOFrzDtnDtNmtHtnStNmtFlTxBzDateRnfDlnstCrsStrMntDsYrlLsIn.getMonth()] + " " + v_ZDatMnfKrzDtsBAsMnTrnCnsnObjOFrzDtnDtNmtHtnStNmtFlTxBzDateRnfDlnstCrsStrMntDsYrlLsIn.getFullYear()) 
                    : "Tanggal Baru Kosong Data ";
        }


        // =========== AWAL BOOT BACA DAtAa Paling Update !!! MENDTESKSI MENU BSRAKAN ARRAY !!!!========== 
        const dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll = Object.keys(databaseGizi);
        for(let uiMx1rTb=0; uiMx1rTb<dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll.length-1;uiMx1rTb++){
            for(let rSm_Rzv2XTBxTblzBtrS_=0; rSm_Rzv2XTBxTblzBtrS_ <dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll.length-1-uiMx1rTb; rSm_Rzv2XTBxTblzBtrS_++) {
                if(new Date(dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll[rSm_Rzv2XTBxTblzBtrS_]) < new Date(dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll[rSm_Rzv2XTBxTblzBtrS_+1])){
                     let t_MxTmpSrVxRxTrObjRvs= dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll[rSm_Rzv2XTBxTblzBtrS_];
                     dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll[rSm_Rzv2XTBxTblzBtrS_] = dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll[rSm_Rzv2XTBxTblzBtrS_+1];
                     dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll[rSm_Rzv2XTBxTblzBtrS_+1] = t_MxTmpSrVxRxTrObjRvs;
                }
            }
        }
        
        // Pilihan Atassssss - >
        const keyDTopBslAyrZDbLatestDtSlMnrFvRvLsKrtMnlBzsTbS10TargetRsValMDataT = dateKDBArrayObjAllTheDatArrayDatSzKsRsvAll[0];
        const doXmS_zElemtInputsTrSelectDatesDomZ_TrInpGetUISelectElementTMTGlHtmlDInputHtmlDsR= document.getElementById('dateSelector');
        
        doXmS_zElemtInputsTrSelectDatesDomZ_TrInpGetUISelectElementTMTGlHtmlDInputHtmlDsR.value = keyDTopBslAyrZDbLatestDtSlMnrFvRvLsKrtMnlBzsTbS10TargetRsValMDataT;
        buildSemuanyaBerdsrakanHari_MakanLoadSysBaseOnTheDtmTglYngBrsNInpttDtBaseInputMTargetDatesDateDbzStrKeyzFlPnlSzRnzTargetDmtVlxTbSlFnDrOlsDtTrgs_RunEng(keyDTopBslAyrZDbLatestDtSlMnrFvRvLsKrtMnlBzsTbS10TargetRsValMDataT);

        // Jika UsEr Memilluh di KAlaender UI !! Mungkn Liyat Har SBLumNya ! >>..
        doXmS_zElemtInputsTrSelectDatesDomZ_TrInpGetUISelectElementTMTGlHtmlDInputHtmlDsR.addEventListener('change', bS_lHsnHdlEventElEvnzMzzBxvCallRxEvtzInnHtlBsvDlTargetVrEvxTValDtInLzz =>{
            buildSemuanyaBerdsrakanHari_MakanLoadSysBaseOnTheDtmTglYngBrsNInpttDtBaseInputMTargetDatesDateDbzStrKeyzFlPnlSzRnzTargetDmtVlxTbSlFnDrOlsDtTrgs_RunEng(bS_lHsnHdlEventElEvnzMzzBxvCallRxEvtzInnHtlBsvDlTargetVrEvxTValDtInLzz.target.value);
        });

    