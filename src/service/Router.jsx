import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestsPage from "../pages/tests-page/TestsPage";
import TestPage from "../pages/test-page/TestPage";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<TestsPage/>} path={"/"}/>
            <Route element={<TestPage/>} path="/:testId"/>
            <Route element={<NotFoundPage/>} path={"/*"}/>
        </Routes>
    </BrowserRouter>
}

export default Router