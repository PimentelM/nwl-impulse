import { Popover } from "@headlessui/react";
import {ChatTeardropDots} from "phosphor-react";

export function Widget() {
    return (
        <Popover className={'absolute bottom-5 right-5'}>

            <Popover.Panel>
                <p>This should be a panel</p>
            </Popover.Panel>

            <Popover.Button className={'group bg-br rounded-full px-3 h-12 text-white bg-brand-500 flex items-center'}>
                <ChatTeardropDots className={'w-6 h-6'}/>
                <span className={'max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'}>
                    <span className={'pl-2'} >Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    );
}
