import { expect } from 'chai';
import AlgorithmController from '../src/AlgorithmController';
import AlgoSetUp from '../src/AlgoSetUp';
import NodeWrapper from '../src/NodeWrapper';
import ResultReport from '../src/ResultReport';
import TestHelper from './TestHelper';


describe('algorithm controller tests', () => {

    it('creates new instance of algorithm controller before start of algo', () => {
        let controller = AlgorithmController.instance()
        expect(controller.getResult().getPlagiarismInstances().length).equal(new ResultReport().getPlagiarismInstances().length);
    })
    it('runs compare tree rename function single file', () => {
        let controller = AlgorithmController.instance()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/rename-function/add1.ts")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/rename-function/add2.ts")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["add1.ts"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["add2.ts"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100);
    })

    it('runs compare tree identical single file', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/Identical/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/Identical/file2.js")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["file1.js"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["file2.js"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100)
    })

    it('runs compare tree on interfaces', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/interface/IIterator1.ts")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/interface/IIterator2.ts")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["IIterator1.ts"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["IIterator2.ts"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100)
    })

    it('runs compare tree on extract-method', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/Extracted-methods/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/Extracted-methods/file2.js")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["file1.js"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["file2.js"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100)
    })

    it('identical multi file', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/program-test/Identical/Student-1/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/program-test/Identical/Student-1/file2.js")
        let singleFileString3 : string = TestHelper.fileToString("/code-tests/program-test/Identical/Student-2/file1.js")
        let singleFileString4 : string = TestHelper.fileToString("/code-tests/program-test/Identical/Student-2/file2.js")


        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1,singleFileString2], ["student-1"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString3, singleFileString4], ["student-2"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100)
    })

    it('changed loops multi file', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/program-test/Changed-loops/Student-1/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/program-test/Changed-loops/Student-1/file2.js")
        let singleFileString3 : string = TestHelper.fileToString("/code-tests/program-test/Changed-loops/Student-2/file1.js")
        let singleFileString4 : string = TestHelper.fileToString("/code-tests/program-test/Changed-loops/Student-2/file2.js")


        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1,singleFileString2], ["student-1"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString3, singleFileString4], ["student-2"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100)
    })

    it('moved functions multi file', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/program-test/Moved-functions/Student-1/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/program-test/Moved-functions/Student-1/file2.js")
        let singleFileString3 : string = TestHelper.fileToString("/code-tests/program-test/Moved-functions/Student-2/file1.js")
        let singleFileString4 : string = TestHelper.fileToString("/code-tests/program-test/Moved-functions/Student-2/file2.js")


        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1,singleFileString2], ["student-1"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString3, singleFileString4], ["student-2"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100)
    })

    it('renamed functions multi file', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/program-test/Renamed-attributes/Student-1/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/program-test/Renamed-attributes/Student-1/file2.js")
        let singleFileString3 : string = TestHelper.fileToString("/code-tests/program-test/Renamed-attributes/Student-2/file1.js")
        let singleFileString4 : string = TestHelper.fileToString("/code-tests/program-test/Renamed-attributes/Student-2/file2.js")


        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1,singleFileString2], ["student-1"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString3, singleFileString4], ["student-2"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100)
    })

    it('multi class single file', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/multiple-classes/class1.ts")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/multiple-classes/class2.ts")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["class1.ts"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["class2.ts"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100)
        expect(controller.getResult().getJson()).not.equal(null);
     
    })

    it('different sorter files', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/Sorter/Sorter1.ts")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/Sorter/Sorter2.ts")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["Sorter1.ts"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["Sorter2.ts"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).closeTo(61,1);
    })

    it('single files changed loops', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/Changed-Loops/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/Changed-Loops/file2.js")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["file1.js"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["file2.js"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100);
    })

    it('single files derived files', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/Derivedfiles/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/Derivedfiles/file2.js")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["file1.js"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["file2.js"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100);
    })

    it('single files renamed attributes', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/Renamed-attributes/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/Renamed-attributes/file2.js")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["file1.js"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["file2.js"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).equal(100);
    })

    it('single files different files', () => {
        let controller = AlgorithmController.instance()
        controller = new AlgorithmController()
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/DifferentFiles/file1.js")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/DifferentFiles/file2.js")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["file1.js"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["file2.js"])
        controller.compareTree(sentinel1, sentinel2)
        expect(controller.getResult().getOverallPercentage()).closeTo(57,1);
    })
})