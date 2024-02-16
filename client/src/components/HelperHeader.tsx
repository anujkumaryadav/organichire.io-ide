//import React from 'react'
import { Button } from './ui/button'
import { Save, Share2 } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { useDispatch, useSelector } from 'react-redux'
import { CompilerSliceStateType, updateCurrentLanguage } from '@/redux/slices/compilerSlice';
import { RootState } from '@/redux/store';
import axios from 'axios';
//import { handleError } from '@/utils/HandleError';

export default function HelperHeader() {

    const fullCode = useSelector((state:RootState)=>state.compilerSlice.fullCode)

    const handleSaveCode = async()=>{
        try {
            const response = await axios.post("http://localhost:4000/compiler/save",{
                fullCode : fullCode,
            })
            console.log(response.data)
        } catch (error) {
            //handleError(error)
        }
    }

    const dispatch = useDispatch();
    const currentLanguage = useSelector(
        (state:RootState)=>state.compilerSlice.currentLanguage
    );

  return (
    <div className='__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center'>
        <div className='__btn_container flex gap-1'>
            <Button 
            onClick={handleSaveCode}
                variant="success" 
                className='flex justify-center items-center gap-2'
            > 
                <Save size={16} />
                Save
            </Button>
            <Button variant="secondary" className='flex justify-center items-center gap-2'> 
                <Share2 size="16px"/> 
                Share
            </Button>
        </div>  

        <div className='__tab_switcher flex justify-center items-center gap-2'>
            <p>Current Language : </p>
            <Select 
                defaultValue={currentLanguage}
                onValueChange={(value)=>
                    dispatch(
                        updateCurrentLanguage(
                            value as CompilerSliceStateType["currentLanguage"]
                        )
                    )
                }
            >
                <SelectTrigger className="w-[120px] bg-gray-800 outline-none focus:ring-0">
                    <SelectValue placeholder="Choose Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="html">HTML</SelectItem>
                    <SelectItem value="css">CSS</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                </SelectContent>
            </Select>
        </div>

    </div>
  )
}
