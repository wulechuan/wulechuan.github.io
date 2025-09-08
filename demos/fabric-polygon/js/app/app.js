// @ts-check





/* global window document ResizeObserver */

const {
    addToScene_SinglePoly,
} = main(window.fabric)

addToScene_SinglePoly()





/**
 * @param {typeof fabric} fabric
 *
 * @returns {{
 *     addToScene_SinglePoly: () => void;
 * }}
 */
function main (fabric) {





    /**
     * @typedef {(
     *     | '矩形'
     *     | '多边形'
     * )} T_XmeGraphs_GraphKind
     */

    /**
     * @typedef {{
     *     x:      number;
     *     y:      number;
     *     width:  number;
     *     height: number;
     * }} T_XmeGraphs_SingleRectNoAngle
     */

    /**
     * @typedef {Omit<(
     *     & T_XmeGraphs_SingleRectNoAngle
     *     & {
     *         angle:  number;
     *     }
     * ), never>} T_XmeGraphs_SingleRectWithAngle_Absolute
     */

    /**
     * @typedef {Omit<(
     *     & T_XmeGraphs_SingleRectWithAngle_Absolute
     *     & {
     *         scaleX: number;
     *         scaleY: number;
     *     }
     * ), never>} T_XmeGraphs_SingleRectWithAngle
     */

    /**
     * @typedef {fabric.IPoint} T_XmeGraphs_Point2d
     */

    /**
     * @typedef {Array<T_XmeGraphs_Point2d>} T_XmeGraphs_SinglePolygon_Point2dList
     */

    /**
     * @typedef {[ number, number, number, number, number, number ]} T_FabricMatrix
     */

    /**
     * @typedef {{
     *     pointList_0_1: T_XmeGraphs_SinglePolygon_Point2dList;
     *     angle:         number;
     * }} T_XmeGraphs_SinglePolygon_GraphDetails_0_1_Absolute
     */

    /**
     * @typedef {Omit<(
     *     & T_XmeGraphs_SinglePolygon_GraphDetails_0_1_Absolute
     *     & {
     *         scaleX:   number;
     *         scaleY:   number;
     *         left_0_1: number | undefined;
     *         top_0_1:  number | undefined;
     *     }
     * ), never>} T_XmeGraphs_SinglePolygon_GraphDetails_0_1
     */

    /**
     * @typedef {{
     *     canvasSizeRatioNewToOld_X: number;
     *     canvasSizeRatioNewToOld_Y: number;
     * }} T_XmeFabric_FabricCanvas_AfterResized_SizeDeltaRatio
     */





    /**
     * @typedef {(
     *     | T_XmeFabric_XmePolygonInstance
     * )} T_XmeFabric_XmeGraphInstance_OfAnyKind
     */





    /**
     * @typedef {{
     *     standardControls: {
     *         cornerSize:                   number;
     *         boundingBoxPadding:           number;
     *         cornerStrokeDashArray:        number[] | undefined;
     *         boundBoxLinesStrokeDashArray: number[] | undefined;
     *     };
     * }} T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_Raw
     */

    /**
     * 暂无字段。
     * @typedef {Record<never, never>} T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_Used
     */

    /**
     * @typedef {{
     *     isModifying:           boolean;
     *     reasonOfDeletion:      '' | 'ViaTheControlOnCanvas';
     *     controlsSettings_Used: T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_Used;
     *     baseSettings_Used: {
     *         xme_ThemingStrokeThickness: number;
     *         xme_ThemingStrokeDashArray: undefined | Array<number>;
     *         xme_BaseStrokeThickness:    number;
     *     };
     * }} T_XmeFabric_XmeGraphs_InstanceCommonProperties_UxStates
     */

    /**
     * `xme_UpdateUsedSettings` 方法函数由外界主动调用。调用之目的为重新计算并缓存诸项绘图尺寸参数。
     * 不难理解，一般的，调用该方法函数之时机应在 fabric 画布尺寸变动之后。
     * 又，目前，暂不计算与尺度无关的参数（例如颜色），故也不缓存这类与尺度无关的参数。
     *
     * @typedef {{
     *     xme_ConfirmDeletion?:   () => Promise<boolean>;
     *     xme_UpdateUsedSettings: (xmeGraph_PaintingGlobalScale: number) => void;
     * }} T_XmeFabric_XmeGraphs_InstanceCommonProperties_ExtraTools
     */

    /**
     * @typedef {(
     *     & {
     *         callSuper: (methodName: string, ...args: any[]) => any;
     *     }
     *     & {
     *         xme_LabelText:                 string;
     *         xme_StaticThemingStrokeColor:  string;
     *         xme_CurrentThemingStrokeColor: string;
     *         xme_StaticFillColor:           undefined | string;
     *         xme_ThemingStrokeDashArray:    undefined | number[];
     *         xme_ThemingStrokeThickness:    number;
     *         xme_BaseStrokeColor:           string;
     *         xme_BaseStrokeThickness:       number;
     *         xme_ShouldUseDynamicStrokeThemingColorDuringModification: boolean;
     *         xme_ControlsSettings_Raw:      T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_Raw;
     *         xme_UxStates:                  T_XmeFabric_XmeGraphs_InstanceCommonProperties_UxStates;
     *         xme_ExtraTools:                T_XmeFabric_XmeGraphs_InstanceCommonProperties_ExtraTools;
     *     }
     * )} T_XmeFabric_XmeGraphs_InstanceCommonProperties_Base
     */

    /**
     * @typedef {{
     *     xme_LabelText?:                                            string;
     *     xme_ThemingStrokeColor?:                                   string;
     *     xme_ThemingStrokeDashArray?:                               number[];
     *     xme_ThemingStrokeThickness?:                               number;
     *     xme_BaseStrokeColor?:                                      string;
     *     xme_BaseStrokeThickness?:                                  number;
     *     xme_ShouldUseDynamicStrokeThemingColorDuringModification?: boolean;
     *     xme_ConfirmDeletion?:                                      () => Promise<boolean>;
     *     xme_GraphsPaintingGlobalScale_InitialValue?:               number;
     * }} T_XmeFabric_XmeGraphs_Constructor_CommonOptions
     */





    const xmeFabric_XmeGraphs_StrokeThicknessMultiplier_OnModifiction = 1.4

    const xmeFabric_XmeGraphs_ThemingStrokeColor_Default = '#fe6'
    const xmeFabric_XmeGraphs_ThemingStrokeThickness_Min     = 1
    const xmeFabric_XmeGraphs_ThemingStrokeThickness_Default = 3
    const xmeFabric_XmeGraphs_ThemingStrokesDashArray_Default = [ 28, 21 ]

    const xmeFabric_XmeGraphs_BaseStrokeColor_Default = '#000'
    const xmeFabric_XmeGraphs_BaseStrokeThickness_Min = 1
    const xmeFabric_XmeGraphs_BaseStrokeThicknessDelta_Default = 7

    const xmeFabric_XmeGraphs_LabelTextFontFamily_Default = 'sans-serif'
    const xmeFabric_XmeGraphs_LabelBarFillColor_Default  = '#000'
    const xmeFabric_XmeGraphs_LabelTextFillColor_Default = '#fff'

    const xmeFabric_XmeGraphs_LabelTextFontSize_Min     = 8
    const xmeFabric_XmeGraphs_LabelTextFontSize_Default = 27

    const xmeFabric_XmeGraphs_LabelBarHeight_Min = 45



    const xmeFabric_XmeGraphs_StandardControls_CornerSize_Min = 6
    const xmeFabric_XmeGraphs_StandardControls_CornerSize_Default = 24
    const xmeFabric_XmeGraphs_StandardControls_BoundBoxPadding_Min = -6
    const xmeFabric_XmeGraphs_StandardControls_BoundBoxPadding_Default = 24


    const xmeFabric_XmeGraphs_TheControlPerPoint_Size_Min                 = 8
    const xmeFabric_XmeGraphs_TheControlPerPoint_Size_Default             = 26
    const xmeFabric_XmeGraphs_TheControlPerPoint_SizeOfFirstPoint_Default = 30

    const xmeFabric_XmeGraphs_TheControlPerPoint_StrokeThickness_Min     = 1
    const xmeFabric_XmeGraphs_TheControlPerPoint_StrokeThickness_Default = 3.2

    const xmeFabric_XmeGraphs_TheControlPerPoint_StrokeColor_Default = '#ccc'
    const xmeFabric_XmeGraphs_TheControlPerPoint_FillColor_Default   = '#333c'



    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_FillColor_Default       = '#f44'
    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_IconStrokeColor_Default = 'white'
    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_IconStrokeThickness_Min     = 0.1
    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_IconStrokeThickness_Default = 4

    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_CircleCenterOffsetX_Default = 36
    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_CircleCenterOffsetY_Default = 64

    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_CircleRadius_Min     = 14
    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_CircleRadius_Default = 21

    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_ConnectionLineThickness_Min     = 1
    const xmeFabric_XmeGraphs_TheControlOfDeletingGraph_ConnectionLineThickness_Default = 4





    /**
     * @param {number} canvasWidth
     * @param {number} canvasHeight
     *
     * @returns {number}
     */
    function xmeFabric_DecidePaintingGlobalScale (canvasWidth, canvasHeight) {
        let canvasSmallSide = Math.min(canvasWidth, canvasHeight)
        if (!(canvasSmallSide > 10)) {
            canvasSmallSide = 1600
        }

        const assummedStandardSideSize = 1600

        return canvasSmallSide / assummedStandardSideSize
    }





    /**
     * @param {CanvasRenderingContext2D} htmlCanvasContext2d
     *
     * @param {{
     *     xmeGraph_PaintingGlobalScale?: number;
     *     fabricObject?:                 fabric.Object;
     *     xme_LabelText?:                string;
     *     labelTextFontFamily?:          string;
     *     labelTextFontSize?:            number;
     *     labelBarHeight?:               number;
     *     labelBarLeft?:                 number;
     *     labelBarTop?:                  number;
     *     labelBarFillColor?:            string;
     *     labelBarStrokeColor?:          string;
     *     labelTextFillColor?:           string;
     * }} [options]
     *
     * @returns {void}
     */
    function xmeFabric_ObjectRender_DrawTextLabel (htmlCanvasContext2d, options) {
        options = options || {}

        let xmeGraph_PaintingGlobalScale = getNumberSafely(options.xmeGraph_PaintingGlobalScale)
        if (!(xmeGraph_PaintingGlobalScale > 0.001)) {
            xmeGraph_PaintingGlobalScale = 1
        }

        const { fabricObject } = options
        if (!fabricObject) { return }

        const xme_LabelText = getTextSafely(options.xme_LabelText, false)
        if (!xme_LabelText) { return }

        const { devicePixelRatio } = window
        const fabricObject_Angle  = fabricObject.angle  ?? 0
        const fabricObject_ScaleX = fabricObject.scaleX ?? 1
        const fabricObject_ScaleY = fabricObject.scaleY ?? 1



        const labelTextFontFamily = getTextSafely(options.labelTextFontFamily, true) || xmeFabric_XmeGraphs_LabelTextFontFamily_Default
        const labelBarFillColor   = getTextSafely(options.labelBarFillColor,   true) || xmeFabric_XmeGraphs_LabelBarFillColor_Default
        const labelTextFillColor  = getTextSafely(options.labelTextFillColor,  true) || xmeFabric_XmeGraphs_LabelTextFillColor_Default

        let labelTextFontSize = getNumberSafely(options.labelTextFontSize)
        if (!(labelTextFontSize >= xmeFabric_XmeGraphs_LabelTextFontSize_Min)) {
            labelTextFontSize = xmeFabric_XmeGraphs_LabelTextFontSize_Default
        }

        labelTextFontSize /= devicePixelRatio



        let labelBarHeight = getNumberSafely(options.labelBarHeight)
        if (!(labelBarHeight > labelTextFontSize)) {
            labelBarHeight = Math.max(xmeFabric_XmeGraphs_LabelBarHeight_Min / devicePixelRatio, labelTextFontSize + 3)
        }

        const labelBarLeft = getNumberSafely(options.labelBarLeft) || 0
        const labelBarTop  = getNumberSafely(options.labelBarTop)  || 0
        let labelBarMinWidth = 20 / devicePixelRatio



        labelTextFontSize *= xmeGraph_PaintingGlobalScale
        labelBarHeight    *= xmeGraph_PaintingGlobalScale
        labelBarMinWidth  *= xmeGraph_PaintingGlobalScale



        htmlCanvasContext2d.textBaseline = 'top'
        htmlCanvasContext2d.textAlign = 'left'
        htmlCanvasContext2d.font = `${labelTextFontSize}px ${labelTextFontFamily}`
        const labelTextMeasurement = htmlCanvasContext2d.measureText(xme_LabelText)
        const labelTextRealHeight = labelTextMeasurement.actualBoundingBoxDescent
        const labelTextPaddingY_Half = (labelBarHeight - labelTextRealHeight) / 2
        const labelTextPaddingX_Half = labelTextPaddingY_Half
        const labelBarWidth = Math.max(
            labelTextMeasurement.width + (2 * labelTextPaddingX_Half),
            labelBarMinWidth
        )

        // console.debug(
        //     `图形之文字标签内容："${xme_LabelText}"`,
        //     '\n    xmeGraph_PaintingGlobalScale', xmeGraph_PaintingGlobalScale,
        //     '\n    labelBarWidth', labelBarWidth,
        //     '\n    labelBarTop',   labelBarTop,
        //     '\n    labelBarLeft',  labelBarLeft,
        //     ''
        // )



        htmlCanvasContext2d.save()

        htmlCanvasContext2d.translate(labelBarLeft, labelBarTop - labelBarHeight / fabricObject_ScaleY / 2)
        htmlCanvasContext2d.scale(1 / fabricObject_ScaleX, 1 / fabricObject_ScaleY)
        htmlCanvasContext2d.rotate(fabric.util.degreesToRadians(-fabricObject_Angle))

        htmlCanvasContext2d.fillStyle   = labelBarFillColor
        htmlCanvasContext2d.strokeStyle = labelTextFillColor
        htmlCanvasContext2d.lineWidth   = 1 * xmeGraph_PaintingGlobalScale
        htmlCanvasContext2d.fillRect  (0, 0, labelBarWidth, labelBarHeight)
        htmlCanvasContext2d.strokeRect(0, 0, labelBarWidth, labelBarHeight)

        htmlCanvasContext2d.fillStyle = labelTextFillColor
        htmlCanvasContext2d.fillText(xme_LabelText, labelTextPaddingX_Half, labelTextPaddingY_Half)

        htmlCanvasContext2d.restore()
    }





    /**
     * 来源： 《 http://fabricjs.com/custom-controls-polygon 》。
     *
     * @param {fabric.Object} fabricObject
     *
     * @returns {fabric.Point}
     */
    function getObjectSizeWithStroke (fabricObject) {
        /** @type {number} */
        let scaleX = getNumberSafely(fabricObject.scaleX)
        if (!isFinite(scaleX)) { scaleX = 1 }

        /** @type {number} */
        let scaleY = getNumberSafely(fabricObject.scaleY)
        if (!isFinite(scaleY)) { scaleY = 1 }

        /** @type {number} */
        let strokeWidth = getNumberSafely(fabricObject.strokeWidth)
        if (!isFinite(strokeWidth)) { strokeWidth = 0 }

        /** @type {number} */
        let width = getNumberSafely(fabricObject.width)
        if (!isFinite(width)) { width = 0 }

        /** @type {number} */
        let height = getNumberSafely(fabricObject.height)
        if (!isFinite(height)) { height = 0 }

        const stroke = new fabric.Point(
            fabricObject.strokeUniform ? (1 / scaleX) : 1,
            fabricObject.strokeUniform ? (1 / scaleY) : 1
        ).multiply(strokeWidth)

        return new fabric.Point(
            width  + stroke.x,
            height + stroke.y
        )
    }





    /**
     * @param {string} oldColor
     * @param {{
     *     hueDelta?:         number;
     *     color2_Alpha_0_1?: number;
     * }} [options]
     *
     * @returns {{
     *     newColor1: string;
     *     newColor2: string;
     * }}
     */
    function getColorsPair_AlongSpectrum (oldColor, options) {
        options = options || {}

        let color2_Alpha_0_1 = getNumberSafely(options.color2_Alpha_0_1)
        if (!(color2_Alpha_0_1 >= 0 && color2_Alpha_0_1 <= 1)) {
            color2_Alpha_0_1 = 0.1
        }

        let hueDelta = getNumberSafely(options.hueDelta)
        if (!isFinite(hueDelta)) {
            hueDelta = 5
        }

        const themingColor_New_Hsl = new fabric.Color(oldColor).toHsl()

        const colorParts = themingColor_New_Hsl.match(fabric.Color.reHSLa)

        if (colorParts) {
            const [ , hueOld, s, l, a ] = colorParts
            const hueNew = (+hueOld + hueDelta) % 360

            const newColor1 = `hsl(${hueNew}, ${s}, ${l}, ${a ?? 1})`
            const newColor2 = `hsl(${hueNew}, ${s}, ${l}, ${color2_Alpha_0_1})`

            return {
                newColor1,
                newColor2,
            }
        } else {
            return {
                newColor1: oldColor,
                newColor2: oldColor,
            }
        }
    }





    /**
     * @param {T_XmeFabric_XmeGraphInstance_OfAnyKind} theXmeFabricGraph
     *
     * @param {{
     *     hueDelta?:         number;
     *     color2_Alpha_0_1?: number;
     * }} [options]
     *
     * @returns {{
     *     xme_ThemingStrokeColor: string;
     *     xme_FillColor: undefined | string;
     * }}
     */
    function xmeFabric_ForSingleXmeGraph_DecideCurrentStrokeColorAndCurrentFillColor (theXmeFabricGraph, options) {
        options = options || {}

        const {
            xme_StaticThemingStrokeColor,
            xme_StaticFillColor,
            xme_ShouldUseDynamicStrokeThemingColorDuringModification,

            xme_UxStates: {
                isModifying,
            },
        } = theXmeFabricGraph

        /** @type {string} */
        let xme_ThemingStrokeColor

        /** @type {string} */
        let xme_FillColor

        if (isModifying && xme_ShouldUseDynamicStrokeThemingColorDuringModification) {
            const {
                newColor1,
                newColor2,
            } = getColorsPair_AlongSpectrum(theXmeFabricGraph.xme_CurrentThemingStrokeColor, options)

            theXmeFabricGraph.xme_CurrentThemingStrokeColor = newColor1
            xme_ThemingStrokeColor = newColor1

            if (xme_StaticFillColor === undefined) {
                xme_FillColor = newColor2
            } else {
                xme_FillColor = xme_StaticFillColor
            }
        } else {
            const {
                // newColor1,
                newColor2,
            } = getColorsPair_AlongSpectrum(xme_StaticThemingStrokeColor, {
                ...options,
                hueDelta: 0,
            })

            xme_ThemingStrokeColor = xme_StaticThemingStrokeColor

            if (xme_StaticFillColor === undefined) {
                xme_FillColor = newColor2 || 'transparent'
            } else {
                xme_FillColor = xme_StaticFillColor
            }
        }

        return {
            xme_ThemingStrokeColor,
            xme_FillColor,
        }
    }





    /**
     * @param {T_XmeFabric_XmeGraphInstance_OfAnyKind} theXmeFabricGraph
     * @param {number} xmeGraph_PaintingGlobalScale
     *
     * @returns {void}
     */
    function xmeFabric_ForSingleXmeGraph_UpdateUsedSettings_CommonSettings (theXmeFabricGraph, xmeGraph_PaintingGlobalScale) {
        _xmeFabric_ForSingleXmeGraph_UpdateUsedSettings_StandardControls     (theXmeFabricGraph, xmeGraph_PaintingGlobalScale)
        _xmeFabric_ForSingleXmeGraph_UpdateUsedSettings_BaseSettings         (theXmeFabricGraph, xmeGraph_PaintingGlobalScale)
        xmeFabric_ForSingleXmeGraph_UpdateUsedSettings_ControlOfGraphDeletion(theXmeFabricGraph, xmeGraph_PaintingGlobalScale)
    }





    /**
     * @param {T_XmeFabric_XmeGraphInstance_OfAnyKind} theXmeFabricGraph
     * @param {number} xmeGraph_PaintingGlobalScale
     *
     * @returns {void}
     */
    function _xmeFabric_ForSingleXmeGraph_UpdateUsedSettings_BaseSettings (theXmeFabricGraph, xmeGraph_PaintingGlobalScale) {
        const {
            xme_ThemingStrokeThickness: xme_ThemingStrokeThickness_Raw,
            xme_ThemingStrokeDashArray: xme_ThemingStrokeDashArray_Raw,
            xme_BaseStrokeThickness:    xme_BaseStrokeThickness_Raw,

            xme_UxStates,
        } = theXmeFabricGraph

        const xme_ThemingStrokeThickness = xmeGraph_PaintingGlobalScale * xme_ThemingStrokeThickness_Raw
        const xme_BaseStrokeThickness    = xmeGraph_PaintingGlobalScale * xme_BaseStrokeThickness_Raw

        /** @type {undefined | Array<number>} */
        const xme_ThemingStrokeDashArray = !Array.isArray(xme_ThemingStrokeDashArray_Raw)
            ? xme_ThemingStrokeDashArray_Raw
            : xme_ThemingStrokeDashArray_Raw.map(n => n * xmeGraph_PaintingGlobalScale)

        xme_UxStates.baseSettings_Used = {
            xme_ThemingStrokeThickness,
            xme_ThemingStrokeDashArray,
            xme_BaseStrokeThickness,
        }
    }





    /**
     * @param {T_XmeFabric_XmeGraphInstance_OfAnyKind} theXmeFabricGraph
     * @param {number} xmeGraph_PaintingGlobalScale
     *
     * @returns {void}
     */
    function _xmeFabric_ForSingleXmeGraph_UpdateUsedSettings_StandardControls (theXmeFabricGraph, xmeGraph_PaintingGlobalScale) {
        const {
            cornerSize,
            cornerStrokeDashArray,
            boundingBoxPadding,
            boundBoxLinesStrokeDashArray,
        } = theXmeFabricGraph.xme_ControlsSettings_Raw.standardControls

        theXmeFabricGraph.cornerSize = xmeGraph_PaintingGlobalScale * cornerSize

        theXmeFabricGraph.padding    = xmeGraph_PaintingGlobalScale * boundingBoxPadding

        theXmeFabricGraph.cornerDashArray = !Array.isArray(cornerStrokeDashArray)
            ? cornerStrokeDashArray
            : cornerStrokeDashArray.map(n => n * xmeGraph_PaintingGlobalScale)

        theXmeFabricGraph.borderDashArray = !Array.isArray(boundBoxLinesStrokeDashArray)
            ? boundBoxLinesStrokeDashArray
            : boundBoxLinesStrokeDashArray.map(n => n * xmeGraph_PaintingGlobalScale)
    }





    /**
     * @param {fabric.IEvent<MouseEvent>} event
     */
    function xmeFabric_XmeGraphs_CommonEventHandler_WhenModificationStarted (event) {
        const transform = event.transform
        if (!transform) { return }

        /** @type {any} */
        const eventTarget = transform.target
        if (!eventTarget) { return }

        /** @type {T_XmeFabric_XmeGraphInstance_OfAnyKind} */
        const theGraph = eventTarget

        theGraph.xme_UxStates.isModifying = true
        theGraph.dirty = theGraph.xme_ShouldUseDynamicStrokeThemingColorDuringModification
    }





    /**
     * @param {fabric.IEvent<Event>} event
     */
    function xmeFabric_XmeGraphs_CommonEventHandler_WhenModificationEnded (event) {
        /** @type {any} */
        const eventTarget = event.target
        if (!eventTarget) { return }

        /** @type {T_XmeFabric_XmeGraphInstance_OfAnyKind} */
        const theGraph = eventTarget

        theGraph.xme_UxStates.isModifying = false
        theGraph.dirty = theGraph.xme_ShouldUseDynamicStrokeThemingColorDuringModification
    }





    // =============================================================================





    /**
     * @typedef {{
     *     circleCenterOffsetX:           number;
     *     circleCenterOffsetY:           number;
     *     circleRadius:                  number;
     *     circleFillColor:               string;
     *     circleConnectionLineColor:     string;
     *     circleConnectionLineThickness: number;
     *     iconStrokeColor:               string;
     *     iconStrokeThickness:           number;
     * }} T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_GraphDeletion_Raw
     *
     * @typedef {{
     *     circleCenterOffsetX:           number;
     *     circleCenterOffsetY:           number;
     *     circleRadius:                  number;
     *     circleConnectionLineThickness: number;
     *     iconStrokeThickness:           number;
     * }} T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_GraphDeletion_Used
     */

    /**
     * `xme_UpdateUsedSettings` 方法函数由外界主动调用。调用之目的为重新计算并缓存诸项绘图尺寸参数。
     * 不难理解，一般的，调用该方法函数之时机应在 fabric 画布尺寸变动之后。
     * 又，目前，暂不计算与尺度无关的参数（例如颜色），故也不缓存这类与尺度无关的参数。
     *
     * @typedef {{
     *     xme_ThisControlSettings_Raw:  T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_GraphDeletion_Raw;
     *     xme_ThisControlSettings_Used: T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_GraphDeletion_Used;
     *     xme_UpdateUsedSettings:       (xmeGraph_PaintingGlobalScale?: number) => void;
     * }} T_XmeFabricControl_GraphDeletion_ExtraProperties
     *
     * @typedef {(
     *     & fabric.Control
     *     & T_XmeFabricControl_GraphDeletion_ExtraProperties
     * )} T_XmeFabricControl_GraphDeletionInstance
     */





    const xmeFabricControl_GraphDeletion_ControlStandardName = 'xmeFabricControl_DeleteGraph'





    /**
     * @typedef {Omit<(
     *     & Partial<T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_GraphDeletion_Raw>
     *     & {
     *         shouldNotChangeBorderColor?: boolean;
     *     }
     * ), never>} T_XmeFabric_CreateControlOfGraphDeletion_OptionsOfEasyHelper
     */

    /**
     * @param {T_XmeFabric_CreateControlOfGraphDeletion_OptionsOfEasyHelper} [options]
     *
     * @returns {void}
     */
    function xmeFabric_EasilyGloballyEnable_ControlOfGraphDeletion (options) {
        options = options || {}
        const xmeFabricControl_DeleteGraph = xmeFabric_XmeGraph_ControlOfGraphDeletion_CreateForSingleGraph(options)

        if (xmeFabricControl_DeleteGraph) {
            fabric.Object.prototype.controls[xmeFabricControl_GraphDeletion_ControlStandardName] = xmeFabricControl_DeleteGraph

            if (!options.shouldNotChangeBorderColor) {
                fabric.Object.prototype.borderColor = xmeFabricControl_DeleteGraph.xme_ThisControlSettings_Raw.circleConnectionLineColor
            }
        }
    }





    /** @returns {Promise<true>} */
    function _promiseTrue () { return Promise.resolve(true) }





    /**
     * @param {Partial<T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_GraphDeletion_Raw>} [creationOptions]
     *
     * @returns {T_XmeFabricControl_GraphDeletionInstance}
     */
    function xmeFabric_XmeGraph_ControlOfGraphDeletion_CreateForSingleGraph (creationOptions) {
        const actionName = 'xmeDeleteGraph_ViaTheControlOnCanvas'



        const _thisControlSettings_Raw = (
            /**
             * @param {Partial<T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_GraphDeletion_Raw>} [_options]
             *
             * @returns {T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_GraphDeletion_Raw}
             */
            function _parseOptions_And_GetRawSettings (_options) {
                _options = _options || {}

                const circleFillColor           = getTextSafely(_options.circleFillColor,           true) || xmeFabric_XmeGraphs_TheControlOfDeletingGraph_FillColor_Default
                const circleConnectionLineColor = getTextSafely(_options.circleConnectionLineColor, true) || circleFillColor
                const iconStrokeColor           = getTextSafely(_options.iconStrokeColor,           true) || xmeFabric_XmeGraphs_TheControlOfDeletingGraph_IconStrokeColor_Default

                let circleRadius = getNumberSafely(_options.circleRadius)
                if (!(circleRadius >= xmeFabric_XmeGraphs_TheControlOfDeletingGraph_CircleRadius_Min)) {
                    circleRadius = xmeFabric_XmeGraphs_TheControlOfDeletingGraph_CircleRadius_Default
                }

                let circleConnectionLineThickness = getNumberSafely(_options.circleConnectionLineThickness)
                if (!(circleConnectionLineThickness >= xmeFabric_XmeGraphs_TheControlOfDeletingGraph_ConnectionLineThickness_Min)) {
                    circleConnectionLineThickness = xmeFabric_XmeGraphs_TheControlOfDeletingGraph_ConnectionLineThickness_Default
                }

                let iconStrokeThickness = getNumberSafely(_options.iconStrokeThickness)
                if (!(iconStrokeThickness >= xmeFabric_XmeGraphs_TheControlOfDeletingGraph_IconStrokeThickness_Min)) {
                    iconStrokeThickness = xmeFabric_XmeGraphs_TheControlOfDeletingGraph_IconStrokeThickness_Default
                }

                const circleCenterOffsetX = getNumberSafely(_options.circleCenterOffsetX) || xmeFabric_XmeGraphs_TheControlOfDeletingGraph_CircleCenterOffsetX_Default
                const circleCenterOffsetY = getNumberSafely(_options.circleCenterOffsetY) || xmeFabric_XmeGraphs_TheControlOfDeletingGraph_CircleCenterOffsetY_Default

                /** @type {T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_GraphDeletion_Raw} */
                const thisControlSettings_Raw = {
                    circleCenterOffsetX,
                    circleCenterOffsetY,
                    circleConnectionLineColor,
                    circleConnectionLineThickness,
                    circleFillColor,
                    circleRadius,
                    iconStrokeColor,
                    iconStrokeThickness,
                }

                return thisControlSettings_Raw
            }
        )(creationOptions)





        /** @type {any} */
        const xmeFabricControl_DeleteGraph_Init = new fabric.Control({
            actionName,

            x:  0.5,
            y: -0.5,

            // offsetX: undefined,
            // offsetY: undefined,

            cursorStyle: 'pointer',

            mouseUpHandler (eventData, transform) {
                /** @type {any} */
                const fabricObject = transform.target

                /** @type {T_XmeFabric_XmeGraphInstance_OfAnyKind} */
                const xmeFabircGraphInstance_OfAnyKind = fabricObject

                const fabricInstance = xmeFabircGraphInstance_OfAnyKind.canvas
                if (!fabricInstance) { return false }

                let {
                    xme_ConfirmDeletion,
                } = xmeFabircGraphInstance_OfAnyKind.xme_ExtraTools

                if (typeof xme_ConfirmDeletion !== 'function') {
                    xme_ConfirmDeletion = _promiseTrue
                }

                xme_ConfirmDeletion().then(isConfirmed => {
                    if (isConfirmed) {
                        xmeFabircGraphInstance_OfAnyKind.xme_UxStates.reasonOfDeletion = 'ViaTheControlOnCanvas'

                        fabricInstance.remove(xmeFabircGraphInstance_OfAnyKind)
                        fabricInstance.requestRenderAll()
                    }
                })

                return true
            },

            /**
             * @param {CanvasRenderingContext2D} htmlCanvasContext2d
             * @param {number} left
             * @param {number} top
             * @param {any} styleOverride
             * @param {T_XmeFabric_XmeGraphInstance_OfAnyKind} xmeFabircGraphInstance_OfAnyKind
             */
            render (htmlCanvasContext2d, left, top, styleOverride, xmeFabircGraphInstance_OfAnyKind) {
                const {
                    xme_ThisControlSettings_Raw: {
                        iconStrokeColor,
                        circleFillColor,
                        circleConnectionLineColor,
                    },

                    xme_ThisControlSettings_Used: {
                        circleConnectionLineThickness,
                        circleRadius,
                        iconStrokeThickness,
                    },
                } = xmeFabricControl_DeleteGraph

                const thisControl = this

                const offsetX = thisControl.offsetX || 0

                htmlCanvasContext2d.save()



                const circleRenderLeft = (left + circleRadius / 2)
                const circleRenderTop  = top

                const connectionLineRenderLeft = -offsetX - circleRadius / 2



                htmlCanvasContext2d.translate(circleRenderLeft, circleRenderTop)
                htmlCanvasContext2d.rotate(fabric.util.degreesToRadians(xmeFabircGraphInstance_OfAnyKind.angle ?? 0))



                htmlCanvasContext2d.beginPath()
                htmlCanvasContext2d.moveTo(connectionLineRenderLeft, 0)
                htmlCanvasContext2d.lineTo(0, 0)
                htmlCanvasContext2d.strokeStyle = circleConnectionLineColor
                htmlCanvasContext2d.lineWidth   = circleConnectionLineThickness
                htmlCanvasContext2d.stroke()



                htmlCanvasContext2d.beginPath()
                htmlCanvasContext2d.arc(
                    0, 0,
                    circleRadius,
                    0, Math.PI * 2,
                    false
                )
                htmlCanvasContext2d.fillStyle = circleFillColor
                htmlCanvasContext2d.fill()



                const iconSizeHalf = circleRadius / 3

                htmlCanvasContext2d.strokeStyle = iconStrokeColor
                htmlCanvasContext2d.lineWidth   = iconStrokeThickness
                htmlCanvasContext2d.lineCap     = 'round'

                htmlCanvasContext2d.beginPath()
                htmlCanvasContext2d.moveTo(-iconSizeHalf, -iconSizeHalf)
                htmlCanvasContext2d.lineTo(+iconSizeHalf, +iconSizeHalf)
                htmlCanvasContext2d.stroke()

                // htmlCanvasContext2d.beginPath()
                htmlCanvasContext2d.moveTo(+iconSizeHalf, -iconSizeHalf)
                htmlCanvasContext2d.lineTo(-iconSizeHalf, +iconSizeHalf)
                htmlCanvasContext2d.stroke()



                htmlCanvasContext2d.restore()
            },

            /**
             * @param {number } objectAngle
             * @param {number } objectCornerSize
             * @param {number } centerX
             * @param {number } centerY
             * @param {boolean} isTouch
             *
             * @returns {{
             *     tl: { x: number, y: number };
             *     tr: { x: number, y: number };
             *     bl: { x: number, y: number };
             *     br: { x: number, y: number };
             * }}
             */
            calcCornerCoords (objectAngle, objectCornerSize, centerX, centerY, isTouch) {
                const {
                    circleRadius,
                } = xmeFabricControl_DeleteGraph.xme_ThisControlSettings_Used

                const cornerRadius = circleRadius + (isTouch ? 4 : 1)

                // console.debug(
                //     'controls.xmeFabricControl_DeleteGraph.calcCornerCoords()',
                //     '\n    objectAngle:     ', objectAngle,
                //     '\n    objectCornerSize:', objectCornerSize,
                //     '\n    centerX:         ', centerX,
                //     '\n    centerY:         ', centerY,
                //     '\n    isTouch:         ', isTouch,
                //     '\n    circleRadius:    ', circleRadius,
                //     ''
                // )

                return {
                    tl: {
                        x: centerX - cornerRadius,
                        y: centerY - cornerRadius,
                    },
                    tr: {
                        x: centerX + cornerRadius,
                        y: centerY - cornerRadius,
                    },
                    bl: {
                        x: centerX - cornerRadius,
                        y: centerY + cornerRadius,
                    },
                    br: {
                        x: centerX + cornerRadius,
                        y: centerY + cornerRadius,
                    },
                }
            },
        })



        /** @type {T_XmeFabricControl_GraphDeletionInstance} */
        const xmeFabricControl_DeleteGraph = xmeFabricControl_DeleteGraph_Init

        xmeFabricControl_DeleteGraph.xme_ThisControlSettings_Raw = _thisControlSettings_Raw

        xmeFabricControl_DeleteGraph.xme_UpdateUsedSettings = function (xmeGraph_PaintingGlobalScale) {
            _xmeFabric_XmeGraph_ControlOfGraphDeletion_UpdateUsedMeasurements_OfSinglegGraph(xmeFabricControl_DeleteGraph, xmeGraph_PaintingGlobalScale)
        }

        // xmeFabricControl_DeleteGraph.xme_ThisControlSettings_Used = { ..._thisControlSettings_Raw }
        xmeFabricControl_DeleteGraph.xme_UpdateUsedSettings(1)



        return xmeFabricControl_DeleteGraph
    }





    /**
     * @param {T_XmeFabric_XmeGraphInstance_OfAnyKind} theXmeFabricGraph
     * @param {number} xmeGraph_PaintingGlobalScale
     *
     * @returns {void}
     */
    function xmeFabric_ForSingleXmeGraph_UpdateUsedSettings_ControlOfGraphDeletion (theXmeFabricGraph, xmeGraph_PaintingGlobalScale) {
        /** @type {any} */
        const _theControlOfGraphDeletion = theXmeFabricGraph.controls[xmeFabricControl_GraphDeletion_ControlStandardName]

        /** @type {T_XmeFabricControl_GraphDeletionInstance} */
        const theControlOfGraphDeletion = _theControlOfGraphDeletion

        if (theControlOfGraphDeletion) {
            theControlOfGraphDeletion.xme_UpdateUsedSettings(xmeGraph_PaintingGlobalScale)
        }
    }





    /**
     * @param {T_XmeFabricControl_GraphDeletionInstance} [theControlInstance]
     * @param {number} [xmeGraph_PaintingGlobalScale]
     * @returns {void}
     */
    function _xmeFabric_XmeGraph_ControlOfGraphDeletion_UpdateUsedMeasurements_OfSinglegGraph (theControlInstance, xmeGraph_PaintingGlobalScale) {
        if (!theControlInstance) { return }

        xmeGraph_PaintingGlobalScale = getNumberSafely(xmeGraph_PaintingGlobalScale)
        if (!isFinite(xmeGraph_PaintingGlobalScale) || Math.abs(xmeGraph_PaintingGlobalScale) <= 0.00001) {
            xmeGraph_PaintingGlobalScale = 1
        }

        const { xme_ThisControlSettings_Raw } = theControlInstance

        const circleCenterOffsetX           = xmeGraph_PaintingGlobalScale * xme_ThisControlSettings_Raw.circleCenterOffsetX
        const circleCenterOffsetY           = xmeGraph_PaintingGlobalScale * xme_ThisControlSettings_Raw.circleCenterOffsetY
        const circleRadius                  = xmeGraph_PaintingGlobalScale * xme_ThisControlSettings_Raw.circleRadius
        const iconStrokeThickness           = xmeGraph_PaintingGlobalScale * xme_ThisControlSettings_Raw.iconStrokeThickness
        const circleConnectionLineThickness = xmeGraph_PaintingGlobalScale * xme_ThisControlSettings_Raw.circleConnectionLineThickness

        theControlInstance.xme_ThisControlSettings_Used = {
            circleCenterOffsetX,
            circleCenterOffsetY,
            circleRadius,
            iconStrokeThickness,
            circleConnectionLineThickness,
        }

        theControlInstance.offsetX = circleCenterOffsetX
        theControlInstance.offsetY = circleCenterOffsetY
    }





    // =============================================================================





    /**
     * @typedef {{
     *     control_1_Size:            number;
     *     control_N_Size:            number;
     *     control_1_StrokeThickness: number;
     *     control_N_StrokeThickness: number;
     *     control_Any_StrokeColor:   string;
     *     control_Any_FillColor:     string;
     * }} T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ControlsSettings__PerPoint_Raw
     *
     *
     *
     * @typedef {{
     *     control_1_Size:            number;
     *     control_N_Size:            number;
     *     control_1_StrokeThickness: number;
     *     control_N_StrokeThickness: number;
     * }} T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ControlsSettings__PerPoint_Used
     */



    /**
     * @typedef {Omit<(
     *     & T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_Raw
     *     & {
     *         perPoint?: T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ControlsSettings__PerPoint_Raw;
     *     }
     * ), never>} T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ControlsSettingsRaw_All
     */



    /**
     * @typedef {(
     *     & T_XmeFabric_XmeGraphs_InstanceCommonProperties_UxStates
     *     & {
     *         controlsSettings_Used: Omit<(
     *             & T_XmeFabric_XmeGraphs_InstanceCommonProperties_ControlsSettings_Used
     *             & {
     *                 perPoint?: T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ControlsSettings__PerPoint_Used;
     *             }
     *         ), never>;
     *     }
     * )} T_XmeFabric_XmeGraphs_InstanceProperties_Poly_UxStates_All
     */



    /**
     * @typedef {(
     *     & T_XmeFabric_XmeGraphs_InstanceCommonProperties_ExtraTools
     *     & T_XmeFabric_XmePolygonExtraTools_1
     * )} T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ExtralTools_All
     */



    /**
     * @typedef {(
     *     & fabric.Polygon
     *     & T_XmeFabric_XmeGraphs_InstanceCommonProperties_Base
     *     & {
     *         type:                     'XmePolygon';
     *         xme_ControlsSettings_Raw: T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ControlsSettingsRaw_All;
     *         xme_UxStates:             T_XmeFabric_XmeGraphs_InstanceProperties_Poly_UxStates_All;
     *         xme_ExtraTools:           T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ExtralTools_All;
     *     }
     * )} T_XmeFabric_XmePolygonInstance
     */





    /**
     * @typedef {(
     *     & fabric.IPolylineOptions
     *     & T_XmeFabric_XmeGraphs_Constructor_CommonOptions
     * )} T_XmeFabric_XmePolygonConstructor_Options
     *
     * @typedef {{
     *     new (
     *         pointsInitialCoords: Array<fabric.IPoint>,
     *         options: T_XmeFabric_XmePolygonConstructor_Options
     *     ): T_XmeFabric_XmePolygonInstance;
     * }} T_XmeFabric_XmePolygonClass
     */





    /**
     * 暂无字段。
     * @typedef {Record<never, never>} T_XmeFabricControl_PolygonPerPoint_ExtraProperties
     */

    /**
     * @typedef {(
     *     & fabric.Control
     *     & T_XmeFabricControl_PolygonPerPoint_ExtraProperties
     * )} T_XmeFabricControl_PolygonPerPoint_TheControlInstance
     */





    /** @type {T_XmeFabric_XmePolygonClass} */
    const XmeFabricPolgyon = fabric.util.createClass(fabric.Polygon, {
        type: 'XmePolygon',

        /**
         * @this {T_XmeFabric_XmePolygonInstance}
         *
         * @param {Array<fabric.IPoint>} initialPoints
         * @param {T_XmeFabric_XmePolygonConstructor_Options} constructionOptions
         */
        initialize (initialPoints, constructionOptions) {
            constructionOptions = constructionOptions || {}

            this.callSuper('initialize', initialPoints, {
                ...constructionOptions,

                /** 该字段必须为 `false` 。否则“逐点移动之控件”、“文字标签”均可能异常。 */
                objectCaching: false,
            })

            // console.debug(this.type, 'initialize()', initialPoints, constructionOptions)

            this.stateProperties && this.stateProperties.push(...[
                'xme_LabelText',
                'xme_StaticThemingStrokeColor',
                'xme_StaticFillColor',
                'xme_ThemingStrokeDashArray',
                'xme_ThemingStrokeThickness',
                'xme_BaseStrokeColor',
                'xme_BaseStrokeThickness',
                // 'xme_ShouldUseDynamicStrokeThemingColorDuringModification',
            ])



            const xme_LabelText                = getTextSafely(constructionOptions.xme_LabelText,          false)
            const xme_BaseStrokeColor          = getTextSafely(constructionOptions.xme_BaseStrokeColor,    true) || xmeFabric_XmeGraphs_BaseStrokeColor_Default
            const xme_StaticThemingStrokeColor = getTextSafely(constructionOptions.xme_ThemingStrokeColor, true) || xmeFabric_XmeGraphs_ThemingStrokeColor_Default
            const xme_StaticFillColor          = getTextSafely(constructionOptions.fill,                   true) || undefined

            const xme_ShouldUseDynamicStrokeThemingColorDuringModification = !!constructionOptions.xme_ShouldUseDynamicStrokeThemingColorDuringModification

            let xme_ThemingStrokeThickness = getNumberSafely(constructionOptions.xme_ThemingStrokeThickness)
            if (!(xme_ThemingStrokeThickness >= xmeFabric_XmeGraphs_ThemingStrokeThickness_Min)) {
                xme_ThemingStrokeThickness    = xmeFabric_XmeGraphs_ThemingStrokeThickness_Default
            }

            let xme_BaseStrokeThickness = getNumberSafely(constructionOptions.xme_BaseStrokeThickness)
            if (!(xme_BaseStrokeThickness >= xmeFabric_XmeGraphs_BaseStrokeThickness_Min)) {
                xme_BaseStrokeThickness    = xmeFabric_XmeGraphs_BaseStrokeThicknessDelta_Default + xme_ThemingStrokeThickness
            }

            let standardControls_CornerSize = getNumberSafely(constructionOptions.cornerSize)
            if (!(standardControls_CornerSize >= xmeFabric_XmeGraphs_StandardControls_CornerSize_Min)) {
                standardControls_CornerSize    = xmeFabric_XmeGraphs_StandardControls_CornerSize_Default
            }

            let standardControls_BoundBoxPadding = getNumberSafely(constructionOptions.padding)
            if (!(standardControls_BoundBoxPadding >= xmeFabric_XmeGraphs_StandardControls_BoundBoxPadding_Min)) {
                standardControls_BoundBoxPadding    = xmeFabric_XmeGraphs_StandardControls_BoundBoxPadding_Default
            }



            /** @type {Array<number> | undefined} */
            let xme_ThemingStrokeDashArray

            if (Array.isArray(constructionOptions.xme_ThemingStrokeDashArray)) {
                xme_ThemingStrokeDashArray = constructionOptions.xme_ThemingStrokeDashArray
            }



            /** @type {Array<number> | undefined} */
            let standardControls_CornerStrokeDashArray

            if (Array.isArray(constructionOptions.cornerDashArray)) {
                standardControls_CornerStrokeDashArray = constructionOptions.cornerDashArray
            }



            /** @type {Array<number> | undefined} */
            let standardControls_BoundBoxLinesStrokeDashArray

            if (Array.isArray(constructionOptions.borderDashArray)) {
                standardControls_BoundBoxLinesStrokeDashArray = constructionOptions.borderDashArray
            }



            if ('strokeLineJoin' in constructionOptions) {
                this.strokeLineJoin = constructionOptions.strokeLineJoin
            } else {
                this.strokeLineJoin = 'round'
            }

            if ('strokeUniform' in constructionOptions) {
                this.strokeUniform = !!constructionOptions.strokeUniform
            } else {
                this.strokeUniform = true
            }



            this.xme_LabelText = xme_LabelText

            this.xme_BaseStrokeColor     = xme_BaseStrokeColor
            this.xme_BaseStrokeThickness = xme_BaseStrokeThickness

            this.xme_StaticThemingStrokeColor = xme_StaticThemingStrokeColor
            this.xme_CurrentThemingStrokeColor = xme_StaticThemingStrokeColor

            this.xme_StaticFillColor  = xme_StaticFillColor

            this.xme_ThemingStrokeThickness = xme_ThemingStrokeThickness
            this.xme_ThemingStrokeDashArray = xme_ThemingStrokeDashArray

            this.xme_ShouldUseDynamicStrokeThemingColorDuringModification = xme_ShouldUseDynamicStrokeThemingColorDuringModification

            this.xme_ControlsSettings_Raw = {
                standardControls: {
                    cornerSize:                   standardControls_CornerSize,
                    cornerStrokeDashArray:        standardControls_CornerStrokeDashArray,
                    boundingBoxPadding:           standardControls_BoundBoxPadding,
                    boundBoxLinesStrokeDashArray: standardControls_BoundBoxLinesStrokeDashArray,
                },
            }

            this.xme_UxStates = {
                isModifying: false,
                reasonOfDeletion: '',
                baseSettings_Used: {
                    xme_ThemingStrokeThickness,
                    xme_ThemingStrokeDashArray,
                    xme_BaseStrokeThickness,
                },
                controlsSettings_Used: {},
            }

            this.xme_ExtraTools = {
                xme_ConfirmDeletion: constructionOptions.xme_ConfirmDeletion,

                xme_UpdateUsedSettings: (xmeGraph_PaintingGlobalScale) => {
                    xmeFabric_ForSingleXmeGraph_UpdateUsedSettings_CommonSettings(this, xmeGraph_PaintingGlobalScale)
                    _xmeFabric_ForSingleXmePolygon_UpdateUsedSettings_BaseSettings(this, xmeGraph_PaintingGlobalScale)
                    _singlePolygon_UpdateUsedSettings_WhichSharedBy_AllControlsOfAllPointsMoving(this, xmeGraph_PaintingGlobalScale)
                },

                xme_GetGraphDetails_0_1_Absolute: (fabricInstance) => {
                    return _singlePolygon_GetGraphDetails_0_1_Absolute(fabricInstance, this)
                },
            }



            this.strokeWidth = 0 // Math.max(xme_ThemingStrokeThickness, xme_BaseStrokeThickness)

            this.controls = { ...fabric.Object.prototype.controls }



            this.on('moving',   xmeFabric_XmeGraphs_CommonEventHandler_WhenModificationStarted)
            this.on('scaling',  xmeFabric_XmeGraphs_CommonEventHandler_WhenModificationStarted)
            this.on('rotating', xmeFabric_XmeGraphs_CommonEventHandler_WhenModificationStarted)
            this.on('skewing',  xmeFabric_XmeGraphs_CommonEventHandler_WhenModificationStarted)

            this.on('xmeMovingPolygonSinglePoint:start', function (event) {
                // console.debug('xmeMovingPolygonSinglePoint:start', event)

                /** @type {any} */
                const transform_Any = event

                /** @type {fabric.Transform} */
                const transform_Typed = transform_Any

                /** @type {any} */
                const polygon_Any = transform_Typed.target

                /** @type {T_XmeFabric_XmePolygonInstance} */
                const polygon_Typed = polygon_Any

                polygon_Typed.xme_UxStates.isModifying = true
            })

            this.on('modified', xmeFabric_XmeGraphs_CommonEventHandler_WhenModificationEnded)



            this.xme_ExtraTools.xme_UpdateUsedSettings(constructionOptions.xme_GraphsPaintingGlobalScale_InitialValue ?? 1)
        },





        /**
         * @this {T_XmeFabric_XmePolygonInstance}
         *
         * @param {CanvasRenderingContext2D} htmlCanvasContext2d
         */
        _render (htmlCanvasContext2d) {
            // console.debug('RENDER XME_POLYGON', htmlCanvasContext2d.canvas.width, '×', htmlCanvasContext2d.canvas.height)

            const {
                xme_LabelText,
                xme_BaseStrokeColor,

                xme_UxStates: {
                    baseSettings_Used: {
                        xme_ThemingStrokeDashArray,
                        xme_ThemingStrokeThickness,
                        xme_BaseStrokeThickness,
                    },
                    isModifying,
                },
            } = this

            const {
                xme_ThemingStrokeColor,
                xme_FillColor,
            } = xmeFabric_ForSingleXmeGraph_DecideCurrentStrokeColorAndCurrentFillColor(this, {
                // hueDelta: 1,
                // color2_Alpha_0_1: 0.05,
            })

            const cachedStrokeWidth = this.strokeWidth

            const xmeGraph_PaintingGlobalScale = xmeFabric_DecidePaintingGlobalScale(
                htmlCanvasContext2d.canvas.width,
                htmlCanvasContext2d.canvas.height
            )

            const baseStrokeWidth = !isModifying
                ? xme_BaseStrokeThickness
                : xme_BaseStrokeThickness * xmeFabric_XmeGraphs_StrokeThicknessMultiplier_OnModifiction

            this.stroke          = xme_BaseStrokeColor
            this.strokeWidth     = baseStrokeWidth
            this.strokeDashArray = undefined

            if (xme_FillColor) {
                this.fill = xme_FillColor
            }

            this.callSuper('_render', htmlCanvasContext2d)



            /** @type {undefined | Array<number>} */
            let strokeDashArray

            if (Array.isArray(xme_ThemingStrokeDashArray)) {
                strokeDashArray = !isModifying
                    ? xme_ThemingStrokeDashArray
                    : xme_ThemingStrokeDashArray // .map(n => n / xmeFabric_XmeGraphs_StrokeThicknessMultiplier_OnModifiction)
            }

            const themingStrokeWidth = !isModifying
                ? xme_ThemingStrokeThickness
                : xme_ThemingStrokeThickness * xmeFabric_XmeGraphs_StrokeThicknessMultiplier_OnModifiction

            this.stroke          = xme_ThemingStrokeColor
            this.strokeWidth     = themingStrokeWidth
            this.strokeDashArray = strokeDashArray
            this.fill            = 'transparent'

            this.callSuper('_render', htmlCanvasContext2d)



            this.stroke      = this.xme_StaticThemingStrokeColor
            this.fill        = this.xme_StaticFillColor
            this.strokeWidth = cachedStrokeWidth



            if (xme_LabelText) {
                /** @type {fabric.IPoint} */
                const pathOffset = this.pathOffset

                /** @type {Array<fabric.IPoint>} */
                let points = []

                if (Array.isArray(this.points)) {
                    points = this.points
                }

                const [ p1, p2 ] = points

                let p1_Rela_X = 0
                let p1_Rela_Y = 0

                if (p1) {
                    p1_Rela_X = p1.x - pathOffset.x
                    p1_Rela_Y = p1.y - pathOffset.y
                }

                let textOrigin_Rela_X = p1_Rela_X
                let textOrigin_Rela_Y = p1_Rela_Y

                if (p1 && p2) {
                    const p2_Rela_X = p2.x - pathOffset.x
                    const p2_Rela_Y = p2.y - pathOffset.y

                    const distance_TwoPoints = Math.sqrt(
                        (p2_Rela_X - p1_Rela_X) ** 2 +
                        (p2_Rela_Y - p1_Rela_Y) ** 2
                    )

                    const distance_TextOriginToP1 = 51

                    const distancePortion = Math.min(
                        (distance_TextOriginToP1 / distance_TwoPoints) / window.devicePixelRatio,
                        0.4
                    )

                    textOrigin_Rela_X = p1_Rela_X + distancePortion * (p2_Rela_X - p1_Rela_X)
                    textOrigin_Rela_Y = p1_Rela_Y + distancePortion * (p2_Rela_Y - p1_Rela_Y)
                }

                xmeFabric_ObjectRender_DrawTextLabel(htmlCanvasContext2d, {
                    xmeGraph_PaintingGlobalScale,
                    fabricObject: this,
                    xme_LabelText,
                    labelBarLeft:        textOrigin_Rela_X,
                    labelBarTop:         textOrigin_Rela_Y,
                    labelBarFillColor:   xme_BaseStrokeColor,
                    labelBarStrokeColor: xme_ThemingStrokeColor,
                    labelTextFillColor:  xme_ThemingStrokeColor,
                })
            }
        },
    })





    /**
     * @param {T_XmeFabric_XmePolygonInstance} theXmePolygon
     * @param {number} xmeGraph_PaintingGlobalScale
     *
     * @returns {void}
     */
    function _xmeFabric_ForSingleXmePolygon_UpdateUsedSettings_BaseSettings (theXmePolygon, xmeGraph_PaintingGlobalScale) {
        // 暂无所需处理之事务。
    }





    /**
     * 来源： 《 http://fabricjs.com/custom-controls-polygon 》。
     *
     * @param {fabric.Canvas} fabricInstance_Reliable
     * @param {Array<number>} thePolygonTransformMatrix
     * @param {fabric.Point } thePoint_LocalCoordSystem
     * @param {fabric.Point } [thePolygonPathOffset]
     *
     * @returns {fabric.Point}
     */
    function xmeFabric_XmeGraphs_PolygonSinglePoint_GetAbsolutePosition_ByPointLocalCoord (
        fabricInstance_Reliable,
        thePolygonTransformMatrix,
        thePoint_LocalCoordSystem,
        thePolygonPathOffset
    ) {
        let pathOffsetX = 0
        let pathOffsetY = 0

        if (thePolygonPathOffset) {
            pathOffsetX = thePolygonPathOffset.x
            pathOffsetY = thePolygonPathOffset.y
        }

        const x = thePoint_LocalCoordSystem.x - pathOffsetX
        const y = thePoint_LocalCoordSystem.y - pathOffsetY

        return fabric.util.transformPoint(
            new fabric.Point(x, y),

            fabric.util.multiplyTransformMatrices(
                fabricInstance_Reliable.viewportTransform || [ 1, 0, 0, 1, 0, 0 ],
                thePolygonTransformMatrix
            )
        )
    }





    /**
     * 来源： 《 http://fabricjs.com/custom-controls-polygon 》。
     *
     * @param {fabric.Canvas      } fabricInstance_Reliable
     * @param {Array<number>      } thePolygonTransformMatrix
     * @param {Array<fabric.Point>} thePointsList
     * @param {number             } pointArrayIndex
     * @param {fabric.Point       } [thePolygonPathOffset]
     *
     * @returns {fabric.Point}
     */
    function xmeFabric_XmeGraphs_PolygonSinglePoint_GetAbsolutePosition_ByPointArrayIndex (
        fabricInstance_Reliable,
        thePolygonTransformMatrix,
        thePointsList,
        pointArrayIndex,
        thePolygonPathOffset
    ) {
        const fallbackPoint = new fabric.Point(0, 0)

        const thePolygonPoint = thePointsList[pointArrayIndex]
        if (!thePolygonPoint) { return fallbackPoint }

        return xmeFabric_XmeGraphs_PolygonSinglePoint_GetAbsolutePosition_ByPointLocalCoord(
            fabricInstance_Reliable,
            thePolygonTransformMatrix,
            thePolygonPoint,
            thePolygonPathOffset
        )
    }





    /**
     * 2024-06-17 吴乐川
     *
     * 参考： 《 http://fabricjs.com/custom-controls-polygon 》。
     *
     * 更新多边形某个或某些顶点（Point，一译 Vertex）的位置时，
     * 单纯的执行 `polygonInstance.set({ points: newPoints })` 是不够的。
     * 因为很可能多边形配套的标准控件（fabricjs 所谓 `control` ）可能并不更新，
     * 故而这些控件形成的操控包围框不准吻合多边形新形态的包围盒。这显然是大大的错误。
     *
     * 每当多边形顶点移位后，须不厌其烦的重算多边形的包围盒。其中有两个关键步骤：
     *
     * 1.  `polygonInstance._setPositionDimensions()`
     * 2.  `polygonInstance.setPositionByOrigin()`
     *
     * 这一做法系受前述官方示例之启发。但此做法在官方基础上稍稍改良（不再拘泥于特定基准点），
     * 故而更为通用。详见下文。
     *
     * 在 fabric 官方示例代码中，为计算新的坐标，须先选取所谓“不变”的点作为基准点。
     * 在选取“不变”的基准点时，官方选择了多边形自身的某个点（point 或成 vertex）。
     * 但实践发现，可以任意选择一个坐标点，将其视作基准点。不妨就选多边形局部坐标系的 (0, 0) 这一点。
     * 如此一来，因为不必拘泥于多边形自身的某个点，而是随意选取一个坐标点，
     * 故而重算多边形包围盒的算法变得更加通用。典型的，当须更替所有点时（甚至点数都变动时），
     * 这一算法仍然有效。
     *
     * @param {fabric.Polygon} thePolygon
     * @param {T_XmeFabric_FabricCanvas_AfterResized_SizeDeltaRatio} fabricCanvas_AfterResized_SizeDeltaRatio
     * @param {(
     *     polygonPoints_OldListCopy: Array<fabric.Point>,
     *     oldSystem: {
     *         polygonPathOffset_Old:        fabric.IPoint;
     *         polygonBaseSize_Old:          fabric.IPoint;
     *         polygonGraphAbsoluteSize_Old: fabric.IPoint;
     *     }
     * ) => fabric.IPolylineOptions} getPolygonNewOptions
     *
     * @returns {boolean}
     */
    function xmeFabric_XmeGraphs_SinglePolygon_UpdateShape (thePolygon, fabricCanvas_AfterResized_SizeDeltaRatio, getPolygonNewOptions) {
        if (!thePolygon) { return false }

        if (!fabricCanvas_AfterResized_SizeDeltaRatio || typeof fabricCanvas_AfterResized_SizeDeltaRatio.canvasSizeRatioNewToOld_X !== 'number' || typeof fabricCanvas_AfterResized_SizeDeltaRatio.canvasSizeRatioNewToOld_Y !== 'number') {
            console.error('[xmeFabric_XmeGraphs_SinglePolygon_UpdateShape] \n    参数 `fabricCanvas_AfterResized_SizeDeltaRatio` 不合规。')
            return false
        }

        if (typeof getPolygonNewOptions !== 'function') {
            console.error('[xmeFabric_XmeGraphs_SinglePolygon_UpdateShape] \n    参数 `getPolygonNewOptions` 不是函数。')
            return false
        }

        /** @type {Array<fabric.Point>} */
        let points_OldListCopy = []

        if (Array.isArray(thePolygon.points)) {
            points_OldListCopy = thePolygon.points.map(p => new fabric.Point(p.x, p.y))
        }

        const theLocalRefPoint = { x: 0, y: 0 }

        const refPoint_Relative_X = theLocalRefPoint.x
        const refPoint_Relative_Y = theLocalRefPoint.y

        const old_PathOffset_X = thePolygon.pathOffset.x
        const old_PathOffset_Y = thePolygon.pathOffset.y

        const refPoint_AbsolutePosition_Old = fabric.util.transformPoint(
            new fabric.Point(
                refPoint_Relative_X - old_PathOffset_X,
                refPoint_Relative_Y - old_PathOffset_Y
            ),

            thePolygon.calcTransformMatrix()
        )

        const refPoint_AbsolutePosition_New = fabric.util.transformPoint(
            refPoint_AbsolutePosition_Old,

            [ fabricCanvas_AfterResized_SizeDeltaRatio.canvasSizeRatioNewToOld_X, 0, 0, fabricCanvas_AfterResized_SizeDeltaRatio.canvasSizeRatioNewToOld_Y, 0, 0 ]
        )



        /* * * * * * * * * * * * * * * * */
        /* * * * * * * * * * * * * * * * */
        /* * * * * * * * * * * * * * * * */
        const polygonBaseSize_Old = getObjectSizeWithStroke(thePolygon)
        const polygonGraphAbsoluteSize_Old = thePolygon._getTransformedDimensions(0, 0)

        const polygonNewOptions = getPolygonNewOptions(points_OldListCopy, {
            polygonBaseSize_Old,
            polygonPathOffset_Old: { x: old_PathOffset_X, y: old_PathOffset_Y },
            polygonGraphAbsoluteSize_Old,
        })

        if (!polygonNewOptions) {
            console.error('[xmeFabric_XmeGraphs_SinglePolygon_UpdateShape] \n    参数 `getPolygonNewOptions` 返回值不合规。')
            return false
        }

        thePolygon.set(polygonNewOptions)
        /* * * * * * * * * * * * * * * * */
        /* * * * * * * * * * * * * * * * */
        /* * * * * * * * * * * * * * * * */



        /**
         * 该步骤不可省略。
         * 否则，在移动多边形某点后，再用矩形变换框操纵该多边形时，
         * 变换矩形框的方位大小将是旧的，亦即是错误的。
         */
        // @ts-expect-error 原因： fabricjs 官方在类型定义中未给出 `_setPositionDimensions` 字段。
        /* const newDim = */ thePolygon._setPositionDimensions({})



        const polygonBaseSize_New = getObjectSizeWithStroke(thePolygon)

        const new_PathOffset_X = thePolygon.pathOffset.x
        const new_PathOffset_Y = thePolygon.pathOffset.y

        const newX = (refPoint_Relative_X - new_PathOffset_X) / polygonBaseSize_New.x
        const newY = (refPoint_Relative_Y - new_PathOffset_Y) / polygonBaseSize_New.y

        // @ts-expect-error 原因： fabricjs 官方为 `setPositionByOrigin` 定义的类型是错误的。
        thePolygon.setPositionByOrigin(refPoint_AbsolutePosition_New, newX + 0.5, newY + 0.5)

        return true
    }





    /**
     * 来源： 《 http://fabricjs.com/custom-controls-polygon 》。
     *
     * @param {fabric.Polygon} thePolygon
     * @param {number        } pointArrayIndex
     * @param {number        } mouseCanvasX
     * @param {number        } mouseCanvasY
     *
     * @returns {boolean}
     */
    function _polygonSinglePointControl_ActionHandler (thePolygon, pointArrayIndex, mouseCanvasX, mouseCanvasY) {
        if (!('points' in thePolygon) || !Array.isArray(thePolygon.points)) {
            return false
        }

        return xmeFabric_XmeGraphs_SinglePolygon_UpdateShape(
            thePolygon,

            {
                canvasSizeRatioNewToOld_X: 1,
                canvasSizeRatioNewToOld_Y: 1,
            },

            (polygonPoints_OldListCopy, {
                polygonPathOffset_Old,
                polygonBaseSize_Old,
                polygonGraphAbsoluteSize_Old,
            }) => {
                const mousePosition_Relative = thePolygon.toLocalPoint(new fabric.Point(mouseCanvasX, mouseCanvasY), 'center', 'center')

                const pointNewPosition_Relative = new fabric.Point(
                    mousePosition_Relative.x * polygonBaseSize_Old.x / polygonGraphAbsoluteSize_Old.x + polygonPathOffset_Old.x,
                    mousePosition_Relative.y * polygonBaseSize_Old.y / polygonGraphAbsoluteSize_Old.y + polygonPathOffset_Old.y
                )

                polygonPoints_OldListCopy[pointArrayIndex] = pointNewPosition_Relative

                return {
                    points: polygonPoints_OldListCopy,
                }
            }
        )
    }





    /**
     * @typedef {Partial<T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ControlsSettings__PerPoint_Raw>} T_XmeFabric_XmePolygonPerPointControls_CreationOptions
     *
     * @typedef {{
     *     xme_GetGraphDetails_0_1_Absolute:            (fabricInstance_Reliable: fabric.Canvas) => T_XmeGraphs_SinglePolygon_GraphDetails_0_1_Absolute;
     *     xme_UpdateUsedSettings_ForControlsPerPoint?: (xmeGraph_PaintingGlobalScale?: number) => void;
     *     xme_EnusreAllControlsPerPointExistences?:    (fabricInstance_Reliable: fabric.Canvas, reason?: string) => void;
     * }} T_XmeFabric_XmePolygonExtraTools_1
     */





    /**
     * @param {{
     *     fabricInstance?:                             fabric.Canvas;
     *     xme_GraphsPaintingGlobalScale_InitialValue?: number;
     *     theXmePolygon?:                              T_XmeFabric_XmePolygonInstance;
     *     controlsCreationOptions?:                    T_XmeFabric_XmePolygonPerPointControls_CreationOptions;
     * }} [options]
     *
     * @returns {void}
     */
    function xmeFabric_Add_PerPointControlSet_To_SinglePolygon (options) {
        options = options || {}

        const {
            fabricInstance,
            xme_GraphsPaintingGlobalScale_InitialValue,
            theXmePolygon,
            controlsCreationOptions,
        } = options

        if (!theXmePolygon) { return }

        theXmePolygon.xme_ControlsSettings_Raw.perPoint = (
            /**
             * @param {T_XmeFabric_XmePolygonPerPointControls_CreationOptions} [_options]
             *
             * @returns {T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ControlsSettings__PerPoint_Raw}
             */
            function _parseOptions_And_GetRawSettings (_options) {
                _options = _options || {}

                const control_Any_StrokeColor = getTextSafely(_options.control_Any_StrokeColor, true) || xmeFabric_XmeGraphs_TheControlPerPoint_StrokeColor_Default
                const control_Any_FillColor   = getTextSafely(_options.control_Any_FillColor,   true) || xmeFabric_XmeGraphs_TheControlPerPoint_FillColor_Default

                let control_N_Size = getNumberSafely(_options.control_N_Size)
                if (!(control_N_Size >= xmeFabric_XmeGraphs_TheControlPerPoint_Size_Min)) {
                    control_N_Size = xmeFabric_XmeGraphs_TheControlPerPoint_Size_Default
                }

                let control_1_Size = getNumberSafely(_options.control_1_Size)
                if (!(control_1_Size >= xmeFabric_XmeGraphs_TheControlPerPoint_Size_Min)) {
                    control_1_Size = xmeFabric_XmeGraphs_TheControlPerPoint_SizeOfFirstPoint_Default
                }

                let control_N_StrokeThickness = getNumberSafely(_options.control_N_StrokeThickness)
                if (!(control_N_StrokeThickness >= xmeFabric_XmeGraphs_TheControlPerPoint_StrokeThickness_Min)) {
                    control_N_StrokeThickness = xmeFabric_XmeGraphs_TheControlPerPoint_StrokeThickness_Default
                }

                let control_1_StrokeThickness = getNumberSafely(_options.control_1_StrokeThickness)
                if (!(control_1_StrokeThickness >= xmeFabric_XmeGraphs_TheControlPerPoint_StrokeThickness_Min)) {
                    control_1_StrokeThickness = control_N_StrokeThickness
                }

                /** @type {T_XmeFabric_XmeGraphs_InstanceProperties_Poly_ControlsSettings__PerPoint_Raw} */
                const thisGroupOfControls_SharedSettings_Raw = {
                    control_Any_StrokeColor,
                    control_Any_FillColor,
                    control_1_Size,
                    control_1_StrokeThickness,
                    control_N_Size,
                    control_N_StrokeThickness,
                }

                return thisGroupOfControls_SharedSettings_Raw
            }
        )(controlsCreationOptions)



        const { xme_ExtraTools } = theXmePolygon

        xme_ExtraTools.xme_EnusreAllControlsPerPointExistences = function (fabricInstance_Reliable, reason) {
            return _singlePolygon_EnusreAllControlsPerPointExistences({
                fabricInstance_Reliable,
                theXmePolygon,
                reason,
            })
        }

        xme_ExtraTools.xme_UpdateUsedSettings_ForControlsPerPoint = function (xme_GraphsPaintingGlobalScale) {
            return _singlePolygon_UpdateUsedSettings_WhichSharedBy_AllControlsOfAllPointsMoving(theXmePolygon, xme_GraphsPaintingGlobalScale)
        }

        xme_ExtraTools.xme_UpdateUsedSettings_ForControlsPerPoint(xme_GraphsPaintingGlobalScale_InitialValue ?? 1)

        if (fabricInstance) {
            xme_ExtraTools.xme_EnusreAllControlsPerPointExistences(fabricInstance, '多边形逐点控件组新诞')
        } else {
            console.log('注意：多边形逐点控件组新诞，但并未完成初始化。\n    所涉多边形', theXmePolygon)
        }
    }





    /**
     * @param {{
     *     reason?:                 string;
     *     fabricInstance_Reliable: fabric.Canvas;
     *     theXmePolygon:           T_XmeFabric_XmePolygonInstance;
     * }} options
     *
     * @returns {void}
     */
    function _singlePolygon_EnusreAllControlsPerPointExistences (options) {
        const {
            fabricInstance_Reliable,
            theXmePolygon,
        } = options

        if (!('points' in theXmePolygon) || !Array.isArray(theXmePolygon.points)) {
            return undefined
        }

        const { points, controls } = theXmePolygon

        // console.debug(
        //     '按需造灭逐点控件',
        //     '\n    因：', options.reason,
        //     '\n    controls', { ...controls },
        //     ''
        // )

        points.forEach((point, pointArrayIndex) => {
            const propertyKeyOfThisControl = 'xme_polygon_point_ctrl_' + pointArrayIndex
            if (controls[propertyKeyOfThisControl]) { return }

            controls[propertyKeyOfThisControl] = _createSingleControl_ForPolygonSinglePoint({
                fabricInstance_Reliable,
                theXmePolygon,
                pointArrayIndex,
            })
        })

        Object.keys(controls).forEach(propertyKeyOfThisControl => {
            const matchingResult = propertyKeyOfThisControl.match(/^xme_polygon_point_ctrl_(\d+)$/)
            if (!matchingResult) { return }
            const [ , pointArrayIndexAsString ] = matchingResult
            const pointArrayIndex = +pointArrayIndexAsString
            if (pointArrayIndex >= points.length) {
                delete controls[propertyKeyOfThisControl]
            }
        })
    }





    /**
     * @param {fabric.Canvas} fabricInstance_Reliable
     * @param {T_XmeFabric_XmePolygonInstance} theXmePolygon
     *
     * @returns {T_XmeGraphs_SinglePolygon_GraphDetails_0_1_Absolute}
     */
    function _singlePolygon_GetGraphDetails_0_1_Absolute (fabricInstance_Reliable, theXmePolygon) {
        let { points } = theXmePolygon
        if (!Array.isArray(points)) { points = [] }

        const canvasW = fabricInstance_Reliable.width  ?? 1
        const canvasH = fabricInstance_Reliable.height ?? 1

        const polygonTransformMatrix = theXmePolygon.calcTransformMatrix()
        const pathOffset             = theXmePolygon.pathOffset

        // console.debug(
        //     '\n画布宽:', canvasW, '   画布高:', canvasH,
        //     '\n    polygonTransformMatrix', polygonTransformMatrix.map(d => +d.toFixed(4)),
        //     '\n多边形:    左:', thePolygon.left, '    顶:', thePolygon.top,
        //     '\n    基准:    ', `"${thePolygon.originX}", "${thePolygon.originY}"`,
        //     '\n    pathOffset:', { ...pathOffset },
        //     ''
        // )

        /** @type {T_XmeGraphs_SinglePolygon_Point2dList} */
        const pointList_0_1 = points.map((point_Raw_InPixels, pointArrayIndex) => {
            // const point_Relative_InPixels = new fabric.Point(
            //     point_Raw_InPixels.x - pathOffset.x,
            //     point_Raw_InPixels.y - pathOffset.y
            // )

            const point_Absoluted_InPixels = xmeFabric_XmeGraphs_PolygonSinglePoint_GetAbsolutePosition_ByPointLocalCoord(
                fabricInstance_Reliable,
                polygonTransformMatrix,
                point_Raw_InPixels,
                pathOffset
            )

            const point_AbsolutedX_InPixels = point_Absoluted_InPixels.x
            const point_AbsolutedY_InPixels = point_Absoluted_InPixels.y

            const point_AbsolutedX_0_1 = point_AbsolutedX_InPixels / canvasW
            const point_AbsolutedY_0_1 = point_AbsolutedY_InPixels / canvasH

            // console.debug(
            //     '    多边形点序号', pointArrayIndex,
            //     // '\n        ratioX', (point_Raw_InPixels.x - polygonPointsDimension.left) / polygonPointsDimension.width,
            //     // '\n        ratioY', (point_Raw_InPixels.y - polygonPointsDimension.top) / polygonPointsDimension.height,
            //     '\n',
            //     '       原始像素    x:', point_Raw_InPixels.x.toFixed(4), '    y:', point_Raw_InPixels.y.toFixed(4),
            //     '\n',
            //     '       全局像素    x:', point_AbsolutedX_InPixels.toFixed(4), '    y:', point_AbsolutedY_InPixels.toFixed(4),
            //     '\n',
            //     '       全局零一    x:', point_AbsolutedX_0_1     .toFixed(4), '    y:', point_AbsolutedY_0_1     .toFixed(4),
            //     ''
            // )

            return {
                x: point_AbsolutedX_0_1,
                y: point_AbsolutedY_0_1,
            }
        })

        return {
            pointList_0_1,
            // left_0_1: 0,
            // top_0_1:  0,
            // scaleX:   1,
            // scaleY:   1,
            angle:    0,
        }
    }





    /**
     * @param {CanvasRenderingContext2D} htmlCanvasContext2d
     * @param {number} left
     * @param {number} top
     * @param {any} styleOverride
     * @param {T_XmeFabric_XmePolygonInstance} xmePolygon
     *
     * @returns {void}
     */
    function _singlePolygon_ControlOfSinglePoint_DrawControlAsSquare (htmlCanvasContext2d, left, top, styleOverride, xmePolygon) {
        const {
            xme_ControlsSettings_Raw: {
                perPoint: perPoint_Raw,
            },
            xme_UxStates: {
                controlsSettings_Used: {
                    perPoint: perPoint_Used,
                },
            },
        } = xmePolygon

        if (!perPoint_Raw || !perPoint_Used) { return }

        htmlCanvasContext2d.save()

        htmlCanvasContext2d.translate(left, top)
        htmlCanvasContext2d.rotate(fabric.util.degreesToRadians(xmePolygon.angle ?? 0))

        htmlCanvasContext2d.lineWidth   = perPoint_Used.control_1_StrokeThickness
        htmlCanvasContext2d.strokeStyle = perPoint_Raw.control_Any_StrokeColor
        htmlCanvasContext2d.fillStyle   = perPoint_Raw.control_Any_FillColor

        const squareSize     = perPoint_Used.control_1_Size
        const squareSizeHalf = squareSize / 2

        htmlCanvasContext2d.beginPath()
        htmlCanvasContext2d.fillRect  (-squareSizeHalf, -squareSizeHalf, squareSize, squareSize)
        htmlCanvasContext2d.strokeRect(-squareSizeHalf, -squareSizeHalf, squareSize, squareSize)

        htmlCanvasContext2d.restore()
    }





    /**
     * @param {CanvasRenderingContext2D} htmlCanvasContext2d
     * @param {number} left
     * @param {number} top
     * @param {any} styleOverride
     * @param {T_XmeFabric_XmePolygonInstance} xmePolygon
     */
    function _singlePolygon_ControlOfSinglePoint_DrawControlAsCircle (htmlCanvasContext2d, left, top, styleOverride, xmePolygon) {
        const {
            xme_ControlsSettings_Raw: {
                perPoint: perPoint_Raw,
            },
            xme_UxStates: {
                controlsSettings_Used: {
                    perPoint: perPoint_Used,
                },
            },
        } = xmePolygon

        if (!perPoint_Raw || !perPoint_Used) { return }

        htmlCanvasContext2d.save()

        htmlCanvasContext2d.translate(left, top)
        htmlCanvasContext2d.rotate(fabric.util.degreesToRadians(xmePolygon.angle ?? 0))


        htmlCanvasContext2d.lineWidth   = perPoint_Used.control_N_StrokeThickness
        htmlCanvasContext2d.strokeStyle = perPoint_Raw.control_Any_StrokeColor
        htmlCanvasContext2d.fillStyle   = perPoint_Raw.control_Any_FillColor

        const circleSize   = perPoint_Used.control_N_Size
        const circleRadius = circleSize / 2

        htmlCanvasContext2d.beginPath()
        htmlCanvasContext2d.arc(
            0, 0,
            circleRadius,
            0, Math.PI * 2,
            true
        )

        htmlCanvasContext2d.fill()
        htmlCanvasContext2d.stroke()

        htmlCanvasContext2d.restore()
    }





    /**
     * @param {{
     *     fabricInstance_Reliable: fabric.Canvas;
     *     theXmePolygon:           T_XmeFabric_XmePolygonInstance;
     *     pointArrayIndex:         number;
     * }} options
     *
     * @returns {T_XmeFabricControl_PolygonPerPoint_TheControlInstance}
     */
    function _createSingleControl_ForPolygonSinglePoint (options) {
        const {
            fabricInstance_Reliable,
            theXmePolygon,
            pointArrayIndex,
        } = options

        const actionName = 'xmeMovingPolygonSinglePoint'

        /** @type {any} */
        const theControlOfPolygonSinglePoint_Init = new fabric.Control({
            actionName,

            cursorStyle: 'move',

            mouseDownHandler (mouseEvent, transform, x, y) {
                transform.target.fire('xmeMovingPolygonSinglePoint:start', transform)
                return true
            },

            /**
             * @param {fabric.IPoint                                        } graphDimension
             * @param {T_FabricMatrix                                       } finalMatrix
             * @param {T_XmeFabric_XmePolygonInstance                       } _theXmePolygon
             * @param {T_XmeFabricControl_PolygonPerPoint_TheControlInstance} currentControl
             *
             * @returns {fabric.Point}
             */
            positionHandler (graphDimension, finalMatrix, _theXmePolygon, currentControl) {
                let pointsList = theXmePolygon.points
                if (!Array.isArray(pointsList)) { pointsList = [] }

                return xmeFabric_XmeGraphs_PolygonSinglePoint_GetAbsolutePosition_ByPointArrayIndex(
                    fabricInstance_Reliable,
                    theXmePolygon.calcTransformMatrix(),
                    pointsList,
                    pointArrayIndex,
                    theXmePolygon.pathOffset
                )
            },

            actionHandler (mouseEvent, transform, mouseCanvasX, mouseCanvasY) {
                return _polygonSinglePointControl_ActionHandler(
                    theXmePolygon,
                    pointArrayIndex,
                    mouseCanvasX,
                    mouseCanvasY
                )
            },

            render: pointArrayIndex === 0
                ? _singlePolygon_ControlOfSinglePoint_DrawControlAsSquare
                : _singlePolygon_ControlOfSinglePoint_DrawControlAsCircle,
        })



        /** @type {T_XmeFabricControl_PolygonPerPoint_TheControlInstance} */
        const theControlOfPolygonSinglePoint = theControlOfPolygonSinglePoint_Init

        return theControlOfPolygonSinglePoint
    }





    /**
     * @param {T_XmeFabric_XmePolygonInstance} [theXmePolygon]
     * @param {number} [xmeGraph_PaintingGlobalScale]
     * @returns {void}
     */
    function _singlePolygon_UpdateUsedSettings_WhichSharedBy_AllControlsOfAllPointsMoving (theXmePolygon, xmeGraph_PaintingGlobalScale) {
        if (!theXmePolygon) { return }

        xmeGraph_PaintingGlobalScale = getNumberSafely(xmeGraph_PaintingGlobalScale)
        if (!isFinite(xmeGraph_PaintingGlobalScale) || Math.abs(xmeGraph_PaintingGlobalScale) <= 0.00001) {
            xmeGraph_PaintingGlobalScale = 1
        }

        const {
            xme_ControlsSettings_Raw: {
                perPoint: perPoint_Raw,
            },

            xme_UxStates: {
                controlsSettings_Used,
            },
        } = theXmePolygon

        if (!perPoint_Raw) { return }

        const {
            control_1_Size,
            control_1_StrokeThickness,
            control_N_Size,
            control_N_StrokeThickness,
        } = perPoint_Raw

        controlsSettings_Used.perPoint = {
            control_1_Size:            xmeGraph_PaintingGlobalScale * control_1_Size,
            control_1_StrokeThickness: xmeGraph_PaintingGlobalScale * control_1_StrokeThickness,
            control_N_Size:            xmeGraph_PaintingGlobalScale * control_N_Size,
            control_N_StrokeThickness: xmeGraph_PaintingGlobalScale * control_N_StrokeThickness,
        }

        // console.debug('controlsSettings_Used.perPoint', '\n  原始', { ...perPoint_Raw }, '\n    比例', xmeGraph_PaintingGlobalScale, '\n    实用', { ...controlsSettings_Used.perPoint })
    }





    // =============================================================================

    /** @typedef {{ x_0_1: number; y_0_1: number; }} _T_XmePoint_0_1 */
    /** @typedef {{ x_Px:  number; y_Px:  number; }} _T_XmePoint_Px */

    /**
     * @typedef {{
     *     xmeGraphUuid: string;
     *     displayName:  string;
     *     graphKind: '多边形';
     *     graphDetails_0_1: Array<_T_XmePoint_0_1>;
     *     fabricRootObject: T_XmeFabric_XmePolygonInstance;
     * }} _T_XmeGraphSetup_SingleEntry
     */

    class XmeFabricObjectsManager {
        /** @type {Record<string, _T_XmeGraphSetup_SingleEntry>} */
        dictOfAllGraphSetups_0_1 = {}

        /**
         * @returns {Array<_T_XmeGraphSetup_SingleEntry>}
         */
        getListOfAllSetups () {
            return Object.keys(this.dictOfAllGraphSetups_0_1).map(xmeGraphUuid => this.dictOfAllGraphSetups_0_1[xmeGraphUuid])
        }

        /**
         * @param {T_XmeFabric_XmePolygonInstance} fabricRootObject
         *
         * @returns {undefined | _T_XmeGraphSetup_SingleEntry}
         */
        findGraphSetup_ForThisObject (fabricRootObject) {
            return this.getListOfAllSetups().find(graphSetup_0_1 => graphSetup_0_1.fabricRootObject === fabricRootObject)
        }

        /**
         * @param {_T_XmeGraphSetup_SingleEntry} newGraph_0_1
         *
         * @returns {void}
         */
        acceptSingleGraphSetup (newGraph_0_1) {
            const { xmeGraphUuid } = newGraph_0_1
            this.dictOfAllGraphSetups_0_1[xmeGraphUuid] = newGraph_0_1
        }

        /**
         * @param {T_XmeFabric_XmePolygonInstance} fabricRootObject
         *
         * @returns {void}
         */
        removeSingleGraphSetup_OfThisFabricObject (fabricRootObject) {
            const foundGraphSetup = this.findGraphSetup_ForThisObject(fabricRootObject)

            if (!foundGraphSetup) { return }
            // console.debug('found', foundGraphSetup)

            /** @type {any} */
            const _foundGraphSetup = foundGraphSetup
            delete _foundGraphSetup.fabricRootObject

            delete this.dictOfAllGraphSetups_0_1[foundGraphSetup.xmeGraphUuid]
        }

        /**
         * @param {T_XmeFabric_XmePolygonInstance} fabricRootObject
         * @param {number} canvas_W
         * @param {number} canvas_H
         *
         * @returns {void}
         */
        updateSingleGraphSetup_OfThisFabricObject (fabricRootObject, canvas_W, canvas_H) {
            const foundGraphSetup = this.findGraphSetup_ForThisObject(fabricRootObject)

            if (!foundGraphSetup) { return }

            if (foundGraphSetup.graphKind === '多边形') {
                // console.debug('变前', ...foundGraphSetup.graphDetails_0_1.map((p, i) => [ '\n   ', i, { ...p } ]).flat(1))
                foundGraphSetup.graphDetails_0_1 = map_Points_Px_Into_Points_0_1(foundGraphSetup.fabricRootObject.points, canvas_W, canvas_H)
                // console.debug('变后', ...foundGraphSetup.graphDetails_0_1.map((p, i) => [ '\n   ', i, { ...p } ]).flat(1))
            }
        }
    }

    // =============================================================================





    const myFabricGraphsManager = new XmeFabricObjectsManager()
    const fabricInstance = new fabric.Canvas('my-canvas-01')
    let fabricCavnasSizeAlreadyInitialized = false
    let xme_GraphsPaintingGlobalScale = 1
    let graphDirtyCount = 0

    /** @type {null | HTMLDivElement} */
    const myFabricCanvasContainer = document.querySelector('.my-fabric-canvas-container')

    /** @type {null | HTMLDivElement} */
    const myFabricCanvasInnerContainer = document.querySelector('.inner-container-of-fixed-aspect-ratio')

    /** @type {null | HTMLSpanElement} */
    const uiText_FabricCanvas_W = document.querySelector('.value-slot--my-fabric-canvas-width')

    /** @type {null | HTMLSpanElement} */
    const uiText_FabricCanvas_H = document.querySelector('.value-slot--my-fabric-canvas-height')

    const domResizingObserver1 = new ResizeObserver(entries => {
        fabricContainer_OnResize()
    })

    if (myFabricCanvasContainer) {
        domResizingObserver1.observe(myFabricCanvasContainer)
    }

    xmeFabric_EasilyGloballyEnable_ControlOfGraphDeletion()



    /**
     * @returns {void}
     */
    function fabricContainer_OnResize () {
        if (!myFabricCanvasContainer || !myFabricCanvasInnerContainer) { return }

        const outer_W = myFabricCanvasContainer.clientWidth
        const outer_H = myFabricCanvasContainer.clientHeight

        const inner_W_Full = Math.min(outer_W, outer_H)
        const inner_H_Full = Math.min(outer_W, outer_H)

        myFabricCanvasInnerContainer.style.width  = `${inner_W_Full}px`
        myFabricCanvasInnerContainer.style.height = `${inner_H_Full}px`

        const inner_W = myFabricCanvasInnerContainer.clientWidth
        const inner_H = myFabricCanvasInnerContainer.clientHeight

        fabricCanvas_OnResize(inner_W, inner_H)

        if (uiText_FabricCanvas_W) {
            uiText_FabricCanvas_W.innerText = `${inner_W}`
        }

        if (uiText_FabricCanvas_H) {
            uiText_FabricCanvas_H.innerText = `${inner_H}`
        }
    }



    /**
     * @param {number} innerContainer_ClientW
     * @param {number} innerContainer_ClientH
     *
     * @returns {void}
     */
    function fabricCanvas_OnResize (innerContainer_ClientW, innerContainer_ClientH) {
        const canvas_W_New = Math.min(innerContainer_ClientW, innerContainer_ClientH)
        const canvas_H_New = Math.min(innerContainer_ClientW, innerContainer_ClientH)

        if (!(canvas_W_New > 8) || !(canvas_H_New > 8)) {
            console.log('画布太小，暂不动作。', canvas_W_New, canvas_H_New)
            return
        }

        const canvas_W_Old = fabricInstance.getWidth()
        const canvas_H_Old = fabricInstance.getHeight()
        fabricInstance.setWidth (canvas_W_New)
        fabricInstance.setHeight(canvas_H_New)

        xme_GraphsPaintingGlobalScale = xmeFabric_DecidePaintingGlobalScale(canvas_W_New, canvas_H_New)

        /** @type {T_XmeFabric_FabricCanvas_AfterResized_SizeDeltaRatio} */
        const fabricCanvas_AfterResized_SizeDeltaRatio = {
            canvasSizeRatioNewToOld_X: fabricCavnasSizeAlreadyInitialized ? canvas_W_New / canvas_W_Old : 1,
            canvasSizeRatioNewToOld_Y: fabricCavnasSizeAlreadyInitialized ? canvas_H_New / canvas_H_Old : 1,
        }

        // console.debug(
        //     '[fabricCanvas_OnResize]',
        //     '\n    原', canvas_W_Old, canvas_H_Old,
        //     '\n    新', canvas_W_New, canvas_H_New,
        //     '\n    全局缩放比', xme_GraphsPaintingGlobalScale,
        //     '\n    画布变化', fabricCanvas_AfterResized_SizeDeltaRatio.canvasSizeRatioNewToOld_X, fabricCanvas_AfterResized_SizeDeltaRatio.canvasSizeRatioNewToOld_Y
        // )

        fabricInstance_ResizeAllGraphs(canvas_W_New, canvas_H_New, fabricCanvas_AfterResized_SizeDeltaRatio)

        fabricCavnasSizeAlreadyInitialized = true
    }

    /**
     * @param {number} canvas_W_New
     * @param {number} canvas_H_New
     * @param {T_XmeFabric_FabricCanvas_AfterResized_SizeDeltaRatio} fabricCanvas_AfterResized_SizeDeltaRatio
     *
     * @returns {void}
     */
    function fabricInstance_ResizeAllGraphs (canvas_W_New, canvas_H_New, fabricCanvas_AfterResized_SizeDeltaRatio) {
        const allGraphSetups_0_1 = myFabricGraphsManager.getListOfAllSetups()

        // console.debug('[fabricInstance_ResizeAllGraphs] 图像个数', allGraphSetups_0_1.length)

        allGraphSetups_0_1.forEach(graphSetup_0_1 => {
            const { graphKind, fabricRootObject, graphDetails_0_1 } = graphSetup_0_1
            if (graphKind === '多边形') {
                /** @type {T_XmeFabric_XmePolygonInstance} */
                const thePolygon = fabricRootObject

                const pointsList_Px = map_Points_0_1_Into_Points_Px(graphDetails_0_1, canvas_W_New, canvas_H_New).map(
                    p => new fabric.Point(p.x, p.y)
                )

                xmeFabric_XmeGraphs_SinglePolygon_UpdateShape(
                    thePolygon,
                    fabricCanvas_AfterResized_SizeDeltaRatio,
                    () => ({ points: pointsList_Px })
                )
                thePolygon.setCoords()
                thePolygon.xme_ExtraTools.xme_UpdateUsedSettings(xme_GraphsPaintingGlobalScale)

                // console.debug(
                //     graphSetup_0_1.displayName,
                //     '\n    点表（像素）', ...pointsList_Px.map((p, i) => [ '\n    ', i, '    x', p.x.toFixed(4), '    y', p.y.toFixed(4) ]).flat(1),
                //     '\n    图形：', thePolygon
                // )
            }
        })

        // fabricInstance.renderAll()
    }

    /**
     * @param {Array<{ x_0_1: number; y_0_1: number; }>} pointsList_0_1
     * @param {number} canvas_W
     * @param {number} canvas_H
     *
     * @returns {T_XmeGraphs_SinglePolygon_Point2dList}
     */
    function map_Points_0_1_Into_Points_Px (pointsList_0_1, canvas_W, canvas_H) {
        return pointsList_0_1.map(p_0_1 => ({
            x: p_0_1.x_0_1 * canvas_W,
            y: p_0_1.y_0_1 * canvas_H,
        }))
    }

    /**
     * @param {undefined | T_XmeGraphs_SinglePolygon_Point2dList} pointsList_Px
     * @param {number} canvas_W
     * @param {number} canvas_H
     *
     * @returns {Array<{ x_0_1: number; y_0_1: number; }>}
     */
    function map_Points_Px_Into_Points_0_1 (pointsList_Px, canvas_W, canvas_H) {
        if (!Array.isArray(pointsList_Px)) { return [] }
        return pointsList_Px.map(point_Px => ({
            x_0_1: point_Px.x / canvas_W,
            y_0_1: point_Px.y / canvas_H,
        }))
    }



    function addToScene_SinglePoly () {
        const cavnas_W = fabricInstance.getWidth()
        const cavnas_H = fabricInstance.getHeight()

        const canvasAssumedStandardWidth  = Math.max(cavnas_W, 640)
        const canvasAssumedStandardHeight = Math.max(cavnas_H, 640)

        // console.debug('[addToScene_SinglePoly]', '\n    画布绘图比例', xme_GraphsPaintingGlobalScale)



        /** @type {Array<{ x_0_1: number; y_0_1: number; }>} */
        const pointsList_0_1 = [
            { x_Px:   0, y_Px:   0 },
            { x_Px: 284, y_Px: 144 },
            { x_Px: 163, y_Px: 148 },
            { x_Px: 378, y_Px: 417 },
            { x_Px: 313, y_Px: 468 },
            { x_Px: 100, y_Px: 192 },
            { x_Px:  74, y_Px: 302 },
        ].map(point_Px => ({
            x_0_1: point_Px.x_Px / canvasAssumedStandardWidth,
            y_0_1: point_Px.y_Px / canvasAssumedStandardHeight,
        }))

        const initLeft = (150 + Math.floor(Math.random() * 150)) * canvasAssumedStandardWidth  / 1600
        const initTop  = (150 + Math.floor(Math.random() * 150)) * canvasAssumedStandardHeight / 1600

        graphDirtyCount++

        // console.debug('[addToScene_SinglePoly]', '\n   图形初始方位 左', initLeft, '\n   图形初始方位 顶', initTop)

        const graphDisplayName = `吴乐川 ${graphDirtyCount}`

        const theXmeFabricPolygon = new XmeFabricPolgyon(
            map_Points_0_1_Into_Points_Px(pointsList_0_1, canvasAssumedStandardWidth, canvasAssumedStandardWidth),

            {
                xme_LabelText:                              graphDisplayName,

                left:                                       initLeft,
                top:                                        initTop,
                xme_GraphsPaintingGlobalScale_InitialValue: xme_GraphsPaintingGlobalScale,

                cornerStyle:                                'circle',
                cornerStrokeColor:                          'white',
                cornerColor:                                '#0007',
                cornerSize:                                 21,
                transparentCorners:                         false,
                xme_ThemingStrokeColor:                     '#7f7',
                xme_ThemingStrokeDashArray:                 xmeFabric_XmeGraphs_ThemingStrokesDashArray_Default,

                selectable:                                 true,
                hasControls:                                true,
                hoverCursor:                                'move',

                xme_ShouldUseDynamicStrokeThemingColorDuringModification: true,
            }
        )

        if (!theXmeFabricPolygon) { return undefined }



        myFabricGraphsManager.acceptSingleGraphSetup({
            xmeGraphUuid: uuid(),
            displayName: graphDisplayName,
            graphKind: '多边形',
            graphDetails_0_1: pointsList_0_1,
            fabricRootObject: theXmeFabricPolygon,
        })



        theXmeFabricPolygon.setControlVisible('mtr', false)

        theXmeFabricPolygon.on('removed', e => {
            myFabricGraphsManager.removeSingleGraphSetup_OfThisFabricObject(theXmeFabricPolygon)
        })

        xmeFabric_Add_PerPointControlSet_To_SinglePolygon({
            fabricInstance,
            xme_GraphsPaintingGlobalScale_InitialValue: xme_GraphsPaintingGlobalScale,
            theXmePolygon: theXmeFabricPolygon,
            controlsCreationOptions: undefined,
        })



        theXmeFabricPolygon.on('modified', event => {
            /** @type {any} */
            const eventTarget = event.target
            if (!eventTarget) { return }

            /** @type {fabric.Canvas} */
            const fabricInstance = eventTarget.canvas

            /** @type {T_XmeFabric_XmePolygonInstance} */
            const thePolygon = eventTarget

            myFabricGraphsManager.updateSingleGraphSetup_OfThisFabricObject(
                thePolygon,
                fabricInstance.getWidth(),
                fabricInstance.getHeight()
            )

            // console.debug(
            //     '多边形诸多全局坐标', thePolygon.xme_ExtraTools.xme_GetGraphDetails_0_1_Absolute(fabricInstance)
            // )
        })



        theXmeFabricPolygon.on('mousedblclick', event => {
            const eventTarget = event.target
            if (!eventTarget) { return }

            eventTarget.sendToBack()

            fabricInstance.discardActiveObject()
            fabricInstance.requestRenderAll()
        })

        fabricInstance.add(theXmeFabricPolygon)
        fabricInstance.setActiveObject(theXmeFabricPolygon)
    }





    return {
        addToScene_SinglePoly,
    }
}









/**
 * @param {*} input
 * @returns {number}
 */
function getNumberSafely (input) {
    if (typeof input === 'number') {
        if (input === 0) { return 0 }
        return input
    }

    if (typeof input === 'string') {
        if (input.trim()) {
            return +input
        }
    }

    return NaN
}

/**
 * @param {*} input
 * @param {boolean} [shouldTrim]
 *
 * @returns {string}
 */
function getTextSafely (input, shouldTrim) {
    if (typeof input === 'boolean') { return '' }

    if (typeof input === 'number') {
        if (isFinite(input)) {
            return `${input}`
        } else {
            return ''
        }
    }

    if (typeof input !== 'string') { return '' }

    if (shouldTrim) {
        return input.trim()
    } else {
        return input
    }
}

/**
 * @returns {string}
 */
function uuid () {
    return `${Math.random().toFixed(8).slice(2)}`
}
