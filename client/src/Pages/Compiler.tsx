import CodeEditor from "@/components/CodeEditor"
import HelperHeader from "@/components/HelperHeader"
import RenderCode from "@/components/RenderCode"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
// import { RootState } from "@/redux/store"
// import { useSelector } from "react-redux"


export default function Compiler() {

  //const html = useSelector((state: RootState) => state.compilerSlice.html);

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="border"
      >
        <ResizablePanel 
          defaultSize={50}
          className="h-[calc(100dvh-60px)] min-w-[350px] p-0"
          >
            <HelperHeader/>
            <CodeEditor/>
            
          
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel 
          defaultSize={50}
          className="h-[calc(100dvh-60px)] min-w-[350px]"
          >
         
            <RenderCode/>
          
        </ResizablePanel>

      </ResizablePanelGroup>
    </>
  )
}
