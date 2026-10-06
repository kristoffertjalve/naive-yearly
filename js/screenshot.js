(() => {
    const home = document.getElementById('home');
    const button = home.querySelector('.save-stamps');
    // Embedded bytes allow canvas export even when opened directly from a local file.
    const flowerImage = new Image();
    flowerImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH6QMKACoUoDNiCwAAFnJJREFUeNq1m3mY5VV95j/vOb9bvbDJ0lXNloj0rRYIIYRxJGrGQeMa4wJVTUDJSGbUEAZnxGeGGBdIcIuOiiMqGDPJPKAoVDdEgzGoDElEjY9xYjJh6dZITEP3rQYhrd101f2d884f59xbt6B6fZrTXc9TVffeU+e7nO/yft+f2M+15byn04TlgMlOAkg2AQAZoM27OOHWzfu0X2+6KxkMRkSQwC1wKPBezDqkFYLGeAfmL4D3CN2HiDbCOYGM0MTMJu+PPNrXN/amu6JsbSAAQdLoPjZOtggYC8swPrNpyf1m13WxpbqfgCBjiwz+t6DrhM8EGRfNDv6c7Z3AhxAfAH4KyC0OncT4zf+0XwbdqwK2TK0hFkltkEyEkMqPSBI/ndvBn/zZZl967mQAZFmYLCkDsjMTM98fWmbLBZPElmp4hB0RLfCzwHuAC1WUk9DwjCpfzlUVsv0j4EqZz4LnkdTaPm799w+OAop7qihdxHJiJ+AY4NXAs4DHEQmzA/ndwDxGIXSwU7SdgXpo0yd7TGGg0CAjIFl6E/hDQocwdLRyRC8cNFXvE6ZFNNUb1gKb62ven2vQLPXLrdNrENXqxZoNuDVajrgc+B3MUSNXoPg7einwEOKunNubED2VNzW2s0QeIw6FD8Y5ELA/BbxB1a0w86AdQBDMC88Bq4yWSTaWEQ0mI1YC3aoApeJ1B+4BW6e7hGKtYiEUDC34dOCzMj+HZCBjUjWQMRHoFGUA9mPAx4CPAo8IBbAUOsnuR5QSjocYzQheWsKgHgduMHwUsxXRKcJ7HrTK6FzB25GPrgHXQLD9ZUkvA6LtvD8esEgBvXVdlEtAQ8Rq1mz5dSUocQiQbCNJxkGoBgcoro6BFhgrwcuPIP4E80Ggh9Sx6MscAf4zwfOqxm4GvQ38T0Wo4In19xtgdnpSlKuSgTXAlyx3sZJEtL2x73RqVEgB7VcmWKyAEulrOiIBJwKfAF4hK1vDD4R6Re8G7jBsAd4EnFUPGSRnUKrXTLa3AZci3SJ8FHC70dklcfKfER93zS6YgXWrgw10rAaYB84Avml5RTGAN7VOp4QDUMCiGFCu8VD4ZxluF1qFaS0siOBga7PgMkduIxOwM+jPwScA20G/ivUOxOFAvzrMKuybbc9YnCx0pmyM3gn+ODAmK1luESX45uDxDffRm5pEMpbnMR3ge7L+CnjJ7q7yASmgBHwSpQj5jKxViPlyF1GJUPoq+AKjh5UdKTEiIh4CbZYJ4HuAr2C+iDhBItu0koJgqioU0AaC341pZPUBy1Ju+5647YfDc03MbGT2vEmX4OSBdf9aCwo4YB2EwTdbptcgSogumlXX0AeP2e7b3CQ4B3ipAo8IN1i5bdyC+thgxxKi6Rj9neFZtq631ZdoKJF1HrnB/Aj4bZLAGsQOjc9s9OoR4QdrfP3GGvaUq6VuqkETFnLmgXtAtIY3XHBk+cbR1o8Fv2b4hiEg44xUMoNiX56Y2QiQe1OTqvcoYaLENvBv2fqIrQ8Bvyo5uAhwGdBDNGWvIvyeDuuR/+AfIf1IaC2QAwqHNWN5R9tXb6pb7ShnZ2w7hqAdqe9n3PrA0h4wPrPJZvjvYZcKNAAftPiG5GVAKAZWNpIJA+EHruqQaxiF5JJFGgVvlPwK4KIq/Eclf0Fyo+jWoFz7iD0tVdPHGBRCbIGd9aVlkuJP274BBwXHEHIMgRhCjCE0AIfGDrPTXW2dWjOyZ129qW6gRPCjEV8ROtPmBuBNIXhXzsKNUSuwPLH+/t0edMt5awmyYsjYODvE2vEk0DjwE1oed0SKxkmeWL+Rva3e9KRGssJyob8FTnUJC2827XUiLgM9DWhBjwD9GES2A3ZwiXEWqO/soQJmp7pN+RDPR7rL5gfGPw/sFCp1LDA+s/eDDg983lootbQxkghEsvOgVSr3fmIvrr+ggK6EItDa/hTSG1QEii5Xo1dlOLIa8yFKqr4R5b/EJCmG0nNhVxcHwJItYQ1c0f8cpJ1BamIT7HJH91l4gIn191OEs2I0EskJlW6pWGHZPrg+wNbzu+VUuDW5I/HvNexOnUoVrAlJx0taKelQSZOSLga+BuHbKFxo5872LZsGtdxCEKxNSdmvxMOx+kpObdIgCR7IekJhMlqr73vFlgxSABLoNJuTJSdDg8WwVx+EvyJOW8RRBM7E/ozRfzzk2DUvbnFqWOQBtuWRDUozUFQFE7fse4v5VCxHQXFRgHMQARRlfRN4LfBcSsX6ZVk7bD+GaaxBoLeRWsQLInppUxQURzxAiyuJkaToA0+ze11bf30Spdp/LKjfgOzWq2cKwKHMMA4ZjpP198A1QjcIWpcPWfAV4AjMPOJtsq9AJFAsXb2wfYGk22EkDbLgmvcAPzF0LIY5bctU9ylRgJJrF2zJkqwADoCDGvUGKSsbOyc7S5kr7HwG4o+zcs64AYeSp5zmY95G0HaL3wH9FlYu6b16vHix8ZHG7YICMgYi8DBwMeZE8OHI2ZS++KlQwMQtmzxxyyYmbtlUSgspiWAVDAGk0g0GWcsLZGiRCQpAUwNqW2uTViiPpRCwJXsMfL3hYi0kPAOrMBdqBG5idmpSJQO4AVqZa40fk/QOGAAiaOKW/QMdh/tPj2CAcsBoLByZ5v2ogoUL+PIpzAnAbwJbVYJeqCjUABasYUlYFZbL8vhIHTE7NbmANcqNoS/ri8ivwBogSQ8Cp43WAViSbB5aGTh+pzsZfxrxTuCfgWDnLMI+tZu9dV1YwBYCRkEhZRyB3GI3xd1d6+cI3Ivo2t6C+D3gfwO7hKJtq1xTZdmr9xKUZ6cm5X60OmlQ37we+GOLvqBj+x7DL4yWwoNM5+N25mCYF1yD+Q1ZyIqiYHm9qa62nPv0PWvAlNxUTMUhzcpsHEvO9jGNeaZEloTlaDkB36sV0zGC6zD3ApcZj2XlbAiuHePeDDA+s9HqtANPABhobCCzbOew+EObKvBLMm4svivUt3wpol/zqQCH0NnjIWIWuIIb8jN3tDt/kVK1vQr4v8C9tt9QPJ9Qi5p3yyUAY7WSfhb0PzF/ExzWUMGWlctW7tM1tMRIf5NrQK9JTZ+JIaTwpA/VykEoPXb0NgEfk/VW448+nlJuKxy+p7LowdeuJQVDIBOIwI3AN4y/Bvq8rOMqoHpxybcKoGj5PovZAhVQ0xZ9SacDNx42toK53Oadczv3KSB3coaFfueEKmFj2ID8nkzWsA7oTZ0MFa4uXkY84uFj2kzuC+0CvXl5CC3SW4EgvFv0tZnLqvc+Yc5BnCkpAS/AZHAyagSpdgpZIgG/Dzq5ekqdEhWoGzjrJ/OPTy4LzcaBF+5J+N50V/3yvhY4Cri64pfbwf8dg1BpE3vTXcX5QG5sB0cZWWoljqFggqcIsuF82+8Cdoi9pMVhac2hgyrVIqmOv6oEJ5L9FolgOAJ4ywgsN7pUA2B/Xyzfm+4qheyYw8DDj6eAqQDrJX5AwULaZna6K8B5LMsmulglCl8JXC50eJnGEICVghXAjt1ZYev0JNiMdTpJgrl+/6KabUNV2mAvyh3nwyN+6ieodVD5VQCGXfsiPOCYg2RFcLJ4oSC43P7/VTEJg9UsjKcUBS32GYjfBa1TLY+M7gf+UHCn8Y8HcPxSBxggJvP9fgZOA84tPbh3AIdRcMHR1S7IP2p546oOFRRgOHfYreALNXssIzzPW6wTvL/+iTslfx0ItjKUblByGX5YfhvwXllGTqVw8dvl8AFZrUMerQGWVEAcW+l2bmdEZODZWAl4EfAPwFqZKxEvYmEousR0yoDmJR6lXI3l1WuGCtg61WX16OA1Vd0FI7IR84Y3AtcDuQbta6v1S4pu5dBYLJMS8odUhO8j2wWlfQ3ovQ6ZHHMHHLZOrVFvag0LuNsTzDm/U4i2jSkA7xZ8XPj/CH4quBv8RyNT5qVkT7UXvcN4NbChvrVTlQGg1U+cOseEYtK/cAyG1TZ/ALq+os0B+JLk26RSiGGYuPV+miTckt8PuhyzC7Hc1g7wq4CvUfD6PrWfDMgVGNmdAAFITRtPBY41PhW4ghI7ViB+czhcWXqDUMchXcylxqdJKnMBeJXgu4C2TnW1erQiLfGrPZHZ1yA21OubrVI2A1+qzWaZadXr0iRyJ6BX1wZ0ua1HgVcKfR3cCUc9Pv+96zdz+vTkPkFXWlDMHKiP+BXwryx6dU/5oxYIktYC19btkq0IpOEBnlSIDIeid8p8BfwiiyTXgnw4dyVgtWA9eO4zHILVwcTidWwWfh7467US7KdHV+j06cm9QtYjB3EOlgObgL8uWJ121TFZO4RuBnYrQTA9CXRwfa3MDCL4EeDT9dW8ev3ifmRiZmMW1rKU/7XJfhnwLowtD2LMa7PzssOPPLYPDpLciVEBEcogFEBvAd2DNCbRqiLR+y58OXfIQcoF+5f1qOXlLHhGGryx/qIBop/oFSVMRURbUF9dA36odqveOjW56O29qUkZeS6G0I+SpasFz5X1fUp/8Rwp3LX90S3jQLYd7AI8XCU4qcalH1oGOxmJjPcVsV18bgZWuwd4paxtA0EpXJ9Mab57tq/C/ojMo0/YKpVg7DGhDZg/iP8qVDyJ1U8AaIWsUv1n2Ul2B/xt8HNtPoHZKels4HbgcIuMCI3MOQUENcCqoRSY8fWb2N8lY5f5Uaq5+Oug07FfB5xE4QpcVohQfong7yvY9RngbsOYSssfKcH4Su3yh71CykdQ6BF6kr8wPnM/gGenJlXwJPoy0eIxwaXYn8f6oqSzbH88oIsAqTfd3Sx0fMXVLwRuAhpJqc3Jx63/wX4rYXZqsnQTpakY1ASuZLIMPFvwY2CTYQw5d7wstczfY/mZsuaAmwxXUbCIpl6dfZojbJuapNJIrDLO64DmMB8A/lstBM8F3RpUB4w1VUwVmEg2mRjCnuL1btf4zEbKNFsCJ1xpNiXeNMjftvx95FgGq7Ht00ZK0LsNOMP4Ysn/onLnh9OcJu8doV01s5FUxmQi2LaSS8l790gSeqfxmGanuq803Cop1EB8DnAXEGXlgr7s/1UYesN5awbYVHVcVZ4BrrFi0FM0glWt8paOG7JSrFygTAUp9icYD1Yt2Ipy4QLgs0J95I7htxujbwDbwBMljPjKjuNdSdm5TEv22nru0RsWKGuje6SR791bt0bKIQFbIoomY5wcsmKOWqngQ2fu23/lr+sWakkNGcbPqlhi+Z38evWmu8j6ksXLZPoWHfBFoBuBBpcx+N5wwN70moJML+D7g/tegUs8vuHJntQbATBHlF2cJsvjG+7nQNaDr11LM29RZ2BSzDm335F0lnGqOOPDmp3qAvp34L+0lErk9A+AX8zy9mBJiOzs1TNPBiI3X7SWsV1ZHhAnCaFUZeXn8Vv2321H19+98gSOXbZCmWRjRTeFJ6iFoJhz9rEjwXrLdJcwcrUo7v9szLdqoZkp7LJvqjc9WWFwXwVcidhltBz8+4IrQctszysVSHNI2FzgMVHHSKF28wOe7/FAD3iMwqPxqgNIq73pyQF9UEIBx0yJaaEay2Xqy5C8VshWDtXzUu5ISr5D1gtqTCloFZwTVL4JFlcZ3WC0vOACXGHzy7bnQIEmRCnEwvNxkBSkUL9Ux91qEa8D7gXuA95R9RVtDiijTNyy0cYKDshKpv03ti8wXp5x3yYVUqc6FbQdoLUJ3Hdwo+TPQRW+dgTGDxi+0xSOs5AIyeHiSI7AhZIa27cBl2X1P7fch+V5Pc7oYGR2+mTZsV56TyCuFFxSFQH2skHS8QEOl3vTk5Itk7PF72HeVccidwM3Ix62/aeFqku9fnSB52PtRFwi87xK51UtpQCulXhcI1OUYFlSTuTwn4zeL3F0LZDupbShY4jD6oAmYfpF0zwDOKOgySTjLNTB/hjSm4GG5DS+Yf+mSlt/fS1KeRBMjwQ2yjqmEqub4ZDI/ibwNyzAdWdLek7phaQqPAO+M/BWyx8GQsOCSnJhScRG+NPAF7AvVykZT7E4ZcnxcdlwE/A27Ast/fygXmek8T0Q+yvl0d5xBdAZ6Sbna4JrkH4J+KWRj2bMvFBl29NRiQ5bQK83vqNS88oDD7Olsxrl7kfkXCBsHQacZnH0Epc4YvcoXJ2Wgr3/leWT6hh66AGy0/h+MDh705MlZWcPoviLgDtKQi1gyiC9V5QhV8z/CWYSmF3gPwJdBTxs3KhAdYubiqKISnVGQXJwqL26Fw9Gv/0ffoGn79yx8F57DLSLQl78cmVY3CDpNyiT3mTw6pm9Z4LZ6a6IuNJpCidI/gLWrwFXCH5sSILzwS9ByrXPuE+FOTZAm5Lha4JPIh6gRH85knKD4twS2MzsurUVGDch4NyW4YTF0gO5Et0yCIeMcmiAf0CsNd4MnE5NhfhJdJlFa9Nrns7hzdgw7WF1VJDdNwHXYd0p+YVA6Ct6LkYf2p+/3dLLZW82OhX8E0Cd7U9z+7THNH3zL/tzr76b2HGh15eRrZztifWbDs7Mf3Zqsg5aPGhorgH+S8XxLhd8pHhBbtnNdHmBps9IjqcPvgB0gwrmN+hWl5dBieeB44DvWhyKOQm0jZDD3JHbvezRI5AVMZlQ+47MkINcrshBWtumJ5UXKO2nCP4WscL2A4YzbG8PUsikHIhDJZQSWgOWU30kR64DjTfIXFd6On3HmbNtpRBd6h0Pq7xzgDtd5hnvA8ZUMlR9pqLYZz4FTrh1cWl90BTQm5rUAAAAsqy7kZ9T0//vSnofsMx2y5A5sKiSjJWKloBDwB8EXSLc2mqAFwJ3ArGSrwf0pQHV9hLjTwDnAzcDjVALKJF97MzSfILAQVoTMxsL+b3wfDBcWwosJcTVxueB5yQINAipVJYhBIlth5+dKHHyfPD/k3WJYL4K/3bkO5EbcLKpj2mgsRTrKN+fFLoa8XnEeRItcuNatu7u3AdNATBEtLPliHwT8DFDVCFPf97mGpuf6dNXpxmz7ZScU7KbVdu/9XIrfAv4nKyfKWnYY4Krkd8LRLJSBfk9IHT0Q9+FLarG4l2ybgTNGH7OBf6OItBbt2bpMx9MBYzSbJBUxhJ8wdLLtdCBzQE/RDyIeYwyLDkFOKmiUn1DR2YWfAnSBmoaHdDnRiGx0UpWWdnBK4B/tDwbrbMBpVr+LcVvOujMr0UH6tjua7nhvwpfanT8Hsgt/ULXpBH6U8MbBbMWTW3YDGh5Cj781vt28zeHRdOLgb+wFjBOrNTPySdsWIxxHtQrANCR63NtzrmINC/8PsqzfW+0eahOPezCORg8dtYpExsuI+jVEg+DG6Wc7LLnUsIDZNpBBkmWoqU7QHcAV4XUMPb4ioRMZwmM8ynh/s2eO1lKp0redGlTs0ohciLw58AplXfQB/UMXwX/D+D+8kygMnLFA4fzyN2u3lS39GJ1NgmcZfydOon+KhADISenRcDOU6KAoSKmuiUBU/KBccShlfKhoGPAY8AuUA88V5vVUNkoVYPBEzP7BovNTnXrMMsBSLJuNT5K0vOBaOeMAhMjKFWzTzsf4KoPTrtXegxUavpg2Cn8AEIKZdCREk0BVZyKtrQf88iyZNmheEz91RVC/2i8DnMzKGYtYqsf/Biw1CqP1ajyzsm1MguY4ETILZCVyAXdUQo+EAh81fqNYFj10BHZcmN5I/BJzB8CRwMp5MUN4P8HslbpTd1PJToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDMtMTBUMDU6NDI6MjAtMDU6MDBpRNgmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTAzLTEwVDA1OjQyOjIwLTA1OjAwGBlgmgAAAABJRU5ErkJggg==';
    function drawText(ctx, element, origin) {
        const style = getComputedStyle(element);
        ctx.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        ctx.fillStyle = style.color;
        ctx.textBaseline = 'alphabetic';
        if ('letterSpacing' in ctx) ctx.letterSpacing = style.letterSpacing;
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
            const node = walker.currentNode;
            let line = '', firstRect = null;
            const flush = () => {
                if (!firstRect || !line.trim()) return;
                const metrics = ctx.measureText(line);
                // DOM text rectangles include the font's ascent and descent.
                const ascent = metrics.fontBoundingBoxAscent || parseFloat(style.fontSize) * .8;
                ctx.fillText(line, firstRect.left - origin.left, firstRect.top - origin.top + ascent);
            };
            for (let i = 0; i < node.length; i++) {
                const range = document.createRange();
                range.setStart(node, i); range.setEnd(node, i + 1);
                const rect = range.getBoundingClientRect();
                if (!rect.width && !rect.height) continue;
                if (firstRect && Math.abs(rect.top - firstRect.top) > 2) { flush(); line = ''; firstRect = null; }
                if (!firstRect) firstRect = rect;
                line += node.textContent[i];
            }
            flush();
        }
    }
    button.addEventListener('click', async () => {
        button.disabled = true;
        try {
            await document.fonts.ready;
            await flowerImage.decode();
            const bounds = home.getBoundingClientRect();
            const style = getComputedStyle(home);
            const canvas = document.createElement('canvas');
            const scale = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(bounds.width * scale);
            canvas.height = Math.round(bounds.height * scale);
            const ctx = canvas.getContext('2d');
            ctx.scale(scale, scale);
            ctx.fillStyle = style.backgroundColor;
            ctx.fillRect(0, 0, bounds.width, bounds.height);
            const layer = home.querySelector('.stamp-layer');
            const layerBounds = layer.getBoundingClientRect();
            for (const stamp of layer.children) {
                const size = parseFloat(getComputedStyle(stamp).width);
                const x = layerBounds.left - bounds.left + parseFloat(stamp.style.left) / 100 * layerBounds.width;
                const y = layerBounds.top - bounds.top + parseFloat(stamp.style.top) / 100 * layerBounds.height;
                const angle = parseFloat(stamp.style.getPropertyValue('--rotation')) * Math.PI / 180;
                ctx.save(); ctx.translate(x, y); ctx.rotate(angle);
                ctx.drawImage(flowerImage, -size / 2, -size / 2, size, size); ctx.restore();
            }
            for (const element of home.querySelectorAll('.hero-kicker, .hero-title, .hero-meta')) drawText(ctx, element, bounds);
            for (const edge of ['Top', 'Right', 'Bottom', 'Left']) {
                const width = parseFloat(style[`border${edge}Width`]);
                ctx.fillStyle = style[`border${edge}Color`];
                if (edge === 'Top') ctx.fillRect(0, 0, bounds.width, width);
                if (edge === 'Bottom') ctx.fillRect(0, bounds.height - width, bounds.width, width);
                if (edge === 'Left') ctx.fillRect(0, 0, width, bounds.height);
                if (edge === 'Right') ctx.fillRect(bounds.width - width, 0, width, bounds.height);
            }
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            if (!blob) throw new Error('Could not create image');
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'naive-yearly-flowers.png'; link.href = url;
            document.body.appendChild(link); link.click(); link.remove();
            setTimeout(() => URL.revokeObjectURL(url), 30000);
        } catch (error) {
            alert('The image could not be saved. Please try again or use your browser screenshot tool.');
        } finally { button.disabled = false; }
    });
})();
