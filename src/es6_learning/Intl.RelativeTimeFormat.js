// https://wangdoc.com/webapi/intl-relativetimeformat.html
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl

{
    let rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    console.log(rtf.format(3.14, 'second'))
    console.log(rtf.format(-15, 'minute'))
    console.log(rtf.format(8, 'hour'))
    console.log(rtf.format(-2, 'day'))
    console.log(rtf.format(-1, 'day'))
    console.log(rtf.format(0, 'day'))
    console.log(rtf.format(1, 'day'))
    console.log(rtf.format(2, 'day'))
    console.log(rtf.format(3, 'week'))
    console.log(rtf.format(-5, 'month'))
    console.log(rtf.format(2, 'quarter'))
    console.log(rtf.format(-42, 'year'))
    console.log(rtf.format(-1, 'year'))

    rtf = new Intl.RelativeTimeFormat('en');

    console.log(rtf.format(3.14, 'second'))
    console.log(rtf.format(-15, 'minute'))
    console.log(rtf.format(8, 'hour'))
    console.log(rtf.format(-2, 'day'))
    console.log(rtf.format(-1, 'day'))
    console.log(rtf.format(0, 'day'))
    console.log(rtf.format(1, 'day'))
    console.log(rtf.format(2, 'day'))
    console.log(rtf.format(3, 'week'))
    console.log(rtf.format(-5, 'month'))
    console.log(rtf.format(2, 'quarter'))
    console.log(rtf.format(-42, 'year'))
    console.log(rtf.format(-1, 'year'))

    rtf = new Intl.RelativeTimeFormat('zh-Hans-CN', { numeric: 'auto' });

    console.log(rtf.format(3.14, 'second'))
    console.log(rtf.format(-15, 'minute'))
    console.log(rtf.format(8, 'hour'))
    console.log(rtf.format(-2, 'day'))
    console.log(rtf.format(-1, 'day'))
    console.log(rtf.format(0, 'day'))
    console.log(rtf.format(1, 'day'))
    console.log(rtf.format(2, 'day'))
    console.log(rtf.format(3, 'week'))
    console.log(rtf.format(-5, 'month'))
    console.log(rtf.format(2, 'quarter'))
    console.log(rtf.format(-42, 'year'))
    console.log(rtf.format(-1, 'year'))


    rtf = new Intl.RelativeTimeFormat('ja-JP-u-ca-japanese', { numeric: 'auto' });

    console.log(rtf.format(3.14, 'second'))
    console.log(rtf.format(-15, 'minute'))
    console.log(rtf.format(8, 'hour'))
    console.log(rtf.format(-2, 'day'))
    console.log(rtf.format(-1, 'day'))
    console.log(rtf.format(0, 'day'))
    console.log(rtf.format(1, 'day'))
    console.log(rtf.format(2, 'day'))
    console.log(rtf.format(3, 'week'))
    console.log(rtf.format(-5, 'month'))
    console.log(rtf.format(2, 'quarter'))
    console.log(rtf.format(-42, 'year'))
    console.log(rtf.format(-1, 'year'))
}