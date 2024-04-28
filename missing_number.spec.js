import { describe } from "mocha"
import myFunction2 from "./missing_number.js"
import { expect } from "chai"

let a,b,hasil

describe("CMN - Pengecekan nomor yang hilang POSITIVE TEST CASE", function () {
    //Hasil ngaco kalo pake to.equal
    it("CMN_001 Test dengan 2 input array number", function () {
        a = [203,203,205,206,207], b = [203,203,205,206,207,204,206]
        hasil = myFunction2(a,b)
        // expect(hasil).to.equal([204,206])
        expect(hasil).to.include(204)
    })

    it("CMN_002 Test dengan 2 input array float", function () {
        a = [203.4,203.4,205.5,206.6,207.7], b = [203.4,203.4,205.5,206.6,207.7,204.3,206.6]
        hasil = myFunction2(a,b)
        // expect(hasil).to.equal([204.3,206.6])
        expect(hasil).to.include(204.3)
    })

    it("CMN_003 Test dengan 1 input array float dan 1 input array number ", function () {
        a = [203,203,205,206,207], b = [203.4,203.4,205.5,206.6,207.6,204.3,206.6]
        hasil = myFunction2(a,b)
        // expect(hasil).to.equal([203,203.4,204.3,205,205.5,206,206.6,207,207.6])
        expect(hasil).to.include(204.3)
    })

    it("CMN_004 Test dengan 1 input array float dan 1 input array number ", function () {
        a = [203.4,203.4,205.5,206.6,207.7], b = [203,203,205,206,207,204,206]
        hasil = myFunction2(a,b)
        // expect(hasil).to.equal([203,203.4,204.3,205,205.5,206,206.6,207,207.6])
        expect(hasil).to.include(204)
    })

    it("CMN_005 Test dengan 2 input array number", function () {
        a = [203,204,205,206,207], b = [203,203,205,206,207,204,206,208]
        hasil = myFunction2(a,b)
        // expect(hasil).to.equal([203,208])
        expect(hasil).to.include(203)
    })

})

describe("CMN - Pengecekan nomor yang hilang NEGATIVE TEST CASE", function () {
    it("CMN_006 Test tanpa 2 input", function () {
        hasil = myFunction2()
        expect(hasil).to.equal("Lengkapi data terlebih dahulu")
    })

    it("CMN_007 Test tanpa 1 input", function () {
        a = [203,203,205,206,207],b = undefined
        hasil = myFunction2(a,b)
        expect(hasil).to.equal("Lengkapi data terlebih dahulu")
    })

    it("CMN_008 Test tanpa 1 input", function () {
        b = [203,203,205,206,207],a = undefined
        hasil = myFunction2(a,b)
        expect(hasil).to.equal("Lengkapi data terlebih dahulu")
    })

    it("CMN_009 Test dengan 1 input bukan array",function(){
        a="ARR",b = [203,203,205,206,207] 
        hasil = myFunction2(a,b)
        expect(hasil).to.equal("Type data input bukan ARRAY!!")
    })

    it("CMN_010 Test dengan 1 input bukan array",function(){
        b="ARR",a = [203,203,205,206,207] 
        hasil = myFunction2(a,b)
        expect(hasil).to.equal("Type data input bukan ARRAY!!")
    })
})