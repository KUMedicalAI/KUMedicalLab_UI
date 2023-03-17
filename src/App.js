import { ImageUpload } from "./breast_novel";
import { Routes, Route } from "react-router-dom"
import { BreastPretrained } from "./breast_pretrained";
import { BreastNovel } from "./breast_novel";
import { BloodNovel } from "./blood_novel";
import { BloodPretrained } from "./blood_pretrained";

function App() {
  return <div className="App">
  <Routes>
    <Route path="/" element={ <BreastNovel/> } />
    <Route path="breast_novel" element={ <BreastNovel/> } />
    <Route path="breast_pretrained" element={ <BreastPretrained/> } />
    <Route path="blood_novel" element={ <BloodNovel/> } />
    <Route path="blood_pretrained" element={ <BloodPretrained/> } />
  </Routes>
</div>;
}

export default App;
