import { ArrowRight, SidebarSimple } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {

    const {slug} = useParams<{slug: string}>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {   slug 
                    ? <Video lessonSlug={slug}/> 
                    : <div className="flex-1 bg-blur">
                        <h1 className="font-bold text-5xl text-center pt-40">Selecione uma aula</h1>
                        <div className="pt-4 text-sm text-blue-500 flex items-center justify-center">
                        <ArrowRight size={48}/>
                        </div>
                        <div className="flex pl-8 pr-8 pb-8">
                            <img src="./src/assets/code-mockup.png" alt="" />
                        </div>
                    </div>
                }
                
                <Sidebar />
                
            </main>
        </div>
        
    )
}