
import React from "react";
import { Drawer } from "vaul";
export const DrawerTrigger =({children})=>{
    return <Drawer.Trigger asChild>{children}</Drawer.Trigger>
}

export default function DevDrawer({ children = null, position = 'right', title, openBtn = null }) {
    const getPositionClasses = {
        left: `left-0 inset-y-0 w-72 h-full border-r rounded-r-xl`,
        right: `right-0 inset-y-0 w-72 h-full border-l rounded-l-xl`,
        top: `top-0 left-0 right-0 w-full min-h-[40vh] max-h-[80vh] border-b rounded-b-xl`,
        bottom: `bottom-0 inset-x-0 min-h-[40vh] max-h-[80vh] w-full border-t rounded-t-xl`,
    }
    return (
        <Drawer.Root direction={position}>
            {/*This Trigger can be used to open the drawer anywhere */}
            <Drawer.Trigger asChild>
                {openBtn}
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Drawer.Content className={`z-50 bg-[#F5F8FF] shadow-[3px_200px_0px_1px_rgba(0,0,0,0)] border-[#06b6d4]/50 dark:bg-[#06b6d4] fixed flex flex-col  ${getPositionClasses[position]}`}>
                    {
                        title && <h2 className="border-b p-3 border-[#06b6d4]/50 text-[#06b6d4] font-semibold flex-shrink-0">
                            {title}
                        </h2>
                    }
                    <div className="overflow-y-auto *:p-3 flex-grow h-full">
                        {children}
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
