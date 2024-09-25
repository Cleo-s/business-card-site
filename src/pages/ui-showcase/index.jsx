import React from "react";

import s from "./ui-showcase.module.scss";
import { useToggleModalState } from "../../hooks";
import { Button } from "../../components/ui";
import { TestModal } from "../../components/ui/modal/modals/test";

export default function UIShowcasePage() {
   const [testSModalOpened, toggleTestSModal] = useToggleModalState();
   const [testMModalOpened, toggleTestMModal] = useToggleModalState();
   const [testLModalOpened, toggleTestLModal] = useToggleModalState();

   return (
      <>
         <main className={s.main}>
            <h1>Modal Window</h1>

            <section className={s.modals}>
               <Button onClick={toggleTestSModal}>Open Small Modal</Button>
               <Button onClick={toggleTestMModal}>Open Medium Modal</Button>
               <Button onClick={toggleTestLModal}>Open Large Modal</Button>
            </section>
         </main>

         <TestModal
            isOpened={testSModalOpened}
            onClose={toggleTestSModal}
            options={{ size: "test-s" }}
         />
         <TestModal
            isOpened={testMModalOpened}
            onClose={toggleTestMModal}
            options={{ size: "test-m" }}
         />
         <TestModal
            isOpened={testLModalOpened}
            onClose={toggleTestLModal}
            options={{ size: "test-l" }}
         />
      </>
   );
}
