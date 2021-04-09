import { expect } from 'chai';
import AlgoSetUp from '../src/AlgoSetUp';
import NodeWrapper from '../src/NodeWrapper';
import ResultReport from '../src/ResultReport';
import * as express from 'express';
import TestHelper from './TestHelper';
import PlagiarismInstance from '../src/PlagarismInstance';
const app: express.Application = express();

describe('result report behavior tests', () => {

    it('empty result report', () => {
        let report = new ResultReport();
        expect(report.getOverallPercentage()).equal(0);
        expect(report.getPlagiarismInstances()).to.have.members([])
    })

    it('tests setting an overall percentage for empty case', () => {
        let report = new ResultReport();
        let program1AST : NodeWrapper[] = []
        let program2AST : NodeWrapper[] = []
        report.setOverallPercentage(program1AST, program2AST)
        expect(report.getOverallPercentage()).equal(0);
    })

    it('tests setting an overall percentage for non-empty case single-file', () => {
        let report = new ResultReport();
        let singleFileString1 : string = TestHelper.fileToString("/code-tests/single-files/rename-function/add1.ts")
        let singleFileString2 : string = TestHelper.fileToString("/code-tests/single-files/rename-function/add2.ts")

        let sentinel1 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString1], ["add1.ts"])
        let sentinel2 : NodeWrapper = AlgoSetUp.createProgramAST([singleFileString2], ["add2.ts"])
        report.setOverallPercentage(sentinel1.getChildren(), sentinel2.getChildren());
        // zero because compile results hasn't run yet from controller
        expect(report.getOverallPercentage()).equal(0);
    })

    it('tests getting json of empty report', () => {
        let report = new ResultReport();
        expect(report.getJson()).contains({ 
            'overallPercentPlagarized' : 0
          })
    })
})