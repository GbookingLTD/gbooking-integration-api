import { ISlotSplittedResponce } from 'src/interfaces/integration';
/**
 * ICrackSplittedResponce is a CRACK's responce for requested splitted resources schedule
 *
 * @example
 * {
 *  "slots": [{
 *       "resources": [{
 *          "resourceId": "55c0d4c8fa6d0a8c6c58e1e5",
 *            "bitset": "0000000000000000000000000000000011111111111111111111111111111111.111
 *                       1111111111111111111111111111111111111111111111111111111111111.111111
 *                       1111111111111111111111111111111111111111111111111111111111.111111111
 *                       1111111111111111111111111111111111111111111111111111111.111111111111
 *                       1111111111111111111111111111111111111111111111111111."
 *         },
 *         {
 *           "resourceId": "55c58b0abdadf04c9b4c0fb7",
 *           "bitset": "0000000000000000000000000000000000000000000000000000000000000000.0000
 *                      000000000000000000000000000000000000000000000000000000000000.00000000
 *                      00000000000000000000000000000000000000000000000000000000.000000000000
 *                      0000000000000000000000000000000000000000000000000000.0000000000000000
 *                      000000000000000000000000000000000000000000000000."
 *         },
 *         {
 *           "resourceId": "574d476fcaf18f1c1ba1f993",
 *           "bitset": "0000000000000000000000000000000011111111111111111111111111111111.1111
 *                      111111111111111111111111000000000000000000000000000000000000.00000000
 *                      00000000000000000000000000000000000000000000000000000000.000000001111
 *                      1111111111111111111111111111111111111111111111111111.1111111111111111
 *                      111111111111111111111111111111111111111111111111."
 *         }
 *       ],
 *       "intersection": "0000000000000000000000000000000000000000000000000000000000000000.00
 *                        00000000000000000000000000000000000000000000000000000000000000.0000
 *                        000000000000000000000000000000000000000000000000000000000000.000000
 *                        0000000000000000000000000000000000000000000000000000000000.00000000
 *                        00000000000000000000000000000000000000000000000000000000.",
 *       "date": "2017-06-04T00:00:00Z"
 *   }]
 * }
 *
 */

export interface ICrackSplittedResponce {
  slots: ISlotSplittedResponce[];
}
