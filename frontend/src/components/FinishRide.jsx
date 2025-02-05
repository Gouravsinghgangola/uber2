import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setFinishridePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this ride</h3>
      <div className="flex items-center  p-4 rounded-lg mt-3 border-2 border-yellow-00 justify-between">
        <div className="flex items-center gap-3 ">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhIRERIWFRUVGBgYFxIVGRUVFxcXFRcXFxUbGhUZHyojGCIlGxgfITEiJS0rLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGzUlICYuNS0vLTUtLS8tLS0tLS0vMy0wLS0tLS4tLi0tLSswLS0tLS0tLS0rLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAACAQUGB//EAEAQAAECAgYHBwIEBQMFAQAAAAEAAgMRBBIhMUFRBRNhcYGhsQYUIjKRwfDh8QdCUtEjQ2JykjOComODssLSFf/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAArEQACAgEDAgYABwEAAAAAAAAAAQIDEQQSITFBEyJRYZGxBSMycYHR4RT/2gAMAwEAAhEDEQA/APYlll43jqpUOR9CstaZiw3jAoB1DpHlPDqrawZj1CHGcCCAZnIW4oBZFo1/D3CHUOR9CiQLDbZZjYgGkvSsOPsjawZj1CBSDOUrb7rckAFM0W47/YJeocj6FHo7pAzstxsQB0nH8x+YJrWDMeoS0UTJItGYtwQA07CuG4JOocj6FNQ3iQtFyAIteE7rBmPUJQMOR9CgIy8bx1TySa0zFhvGBTesGY9QgK0jynh1SiZjOBBAMzkLcUvUOR9CgCUa/h7hNJWBYbbLMbExrBmPUIANKw4+yAjUgzlK2+63JCqHI+hQDFFuO/2CMgUd0gZ2W42IusGY9QgFY/mPzBURIomSRaMxbgqVDkfQoDCizUOR9CsoB1Vi+U7iq69ufIqr4oIIBtNmOKAWV4HmHzBTUuy6LLGFpBIkB9kA2g0q4b/Yq2vbnyKHFdWkG2m/LqgAI9Ex4e6HqXZdFeEas61k+N25AMpWk38Pco2vbnyKDFFYzbaLsuqAEm6P5Rx6pfUuy6IsOIGiRsI+6AOkX3neeqa17c+RQDDJtAsNuGKAEVsEmYLsuiY17c+RQFovlO4pJMvigggG02Y4oOpdl0QEgeYfME4lGMLSCRID7I+vbnyKArSrhv8AYpZHiurSDbTfl1Q9S7LogCUTHh7phLQjVnWsnxu3IuvbnyKADSb+HuUJFiisZttF2XVV1LsuiAYo/lHHqiIEOIGiRsI+6vr258igCKIevbnyKwgFVll43jqid3OzmpqSLbLLfRANIdI8p4dVXvAyPJVfEreEC057LUABFo1/D3Cndzs5rLW1DM7rPmxAMpel4cfZW7wMjyVH+O7DPb9kAFM0W47/AGCH3c7Oasx1Sw77PmxAMJOP5j8wRu8DI8kN7JzdYBt2fZAKmkMriFWFcisGTtLbiQFsYVw3BeO9qtKGLSTGhuIqECG4XgMNh4mZ4rv+x/ahtLhSdZGYAIjRK3+toyPI2KrTqo2Tcfj3LV2llXBS+fY6ZISXHdr6e+JEcys4Q2mrVBIBIDSSZX+aUrrFrNEaai0Ym+JDIPgJMg7Agm629du9KWC1D8KsnV4ifPp/p6Ky8bx1Ty88gdq448Tgw2zqBshKdwdOYO0rtqFpFsWGyI0GTwCLvS/OxSQsjLoVdRo7aMOaGaR5Tw6pRHfEreEC057LVXu52c12VSUa/h7hNJZrahmd1nzYr94GR5ICtLw4+yAjP8d2Ge37LHdzs5oAlFuO/wBgjJdjqlh32fNit3gZHkgAx/MfmCoimGXeIXHPZYp3c7OaAEoi93OzmogGlWL5TuKD3nZz+iwY87JX2X5oAKvA8w+YIndtvL6rBhVfFOcsLr7EAyg0q4b/AGKr3nZz+ixWr2XY57PdABR6Jjw91O7beX1WPJtnwu+6AZStJv4e5Vu87Of0WKte27DPb7oAK0va/SwhUcwWn+JFBbIXhhMnOOVlg37EftBpqHRRKdeIR4YYsltccB1XnNNpT4j3RIjqz3XnoAMAMln6zVKKcI9fov6PSubU5dPsRjsR9AQ6j9e17muaTVqmRyM8xsusVCqQnhhINgnMH2WbS0pcm5XGDlifQ6vRw18R8SKa1UAmchWdcCQJYBRukq5aww7zVIMrOAWq0RpGRcQawuMvUb09H0s0ElrBWP5pW9FpKaazkklU3LyrK7eiFaTDqvLBK8SmQBbmTcNq9A0RRNVBhw5gybaRaCXEuMtkyvOQ4mbibSu37HRA5sSGHghjhVGIDmzdITmBO5SUNbmU/wAXrk6Vz06/RvoHmHzBOJYw6vinOWF19iz3nZz+iuHzhalXDf7FLI1avZdjns91nu23l9UBKJjw90wlvJtnwu+6z3nZz+iArSb+HuUJGq17bsM9vus9228vqgCUfyjj1REsIlXwynLG6+1Z7zs5/RAMKJfvOzn9FEABZZeN46pju4zPJYdBAtmbLcMEAdDpHlPDqg94OzmoIhd4TcctlqAEi0a/h7hE7uMzyVXtqWjdb82IBhL0vDj7KveDs5rLfHOtZLLbv3IAK5vSvastnDosnGdsU+UZho/Mdt29a3tR2g1hdBgk6sWOfi8jAH9PXctQyI0NEiJcllanWtvZX8/0aum0WFvs+P7KuhFzi57i5zjMkm0neo5rRgAlI+khc31+iSiUgm8zWaaI7SIrTdaVaG5tXDitcIqIHL0BqLSWwnOrMrMdbZZI8EOmU5rialxsAts3koL4mSHNSq2SjtJI3SisIyykxAJWHb8KGx8RrxFbEc2ILntJaRuIw2XLNVYkuHOXqcSnKSw3k7ns52/rSg02TTYBHAkD/eBd/cLNy7cfCvDXtmuk7H9qjRnNgUgkwDc68wt39GYwvWhptY87Z/JmanR8bofB6nRr+HuE0liA0BzTOfESNuCx3g7Oa1DLLUvDj7ICMzx34Zbfsr93GZ5ICUW47/YIyWc6oZDfb82LHeDs5oCsfzH5gqI7IdbxG85bLFbu4zPJALKJnu4zPJRAGVYvlO4pXXOz6LIiE2E2GzDFADV4HmHzBMahuXMqkSGGiYsI+yAOg0q4b/YoOudn0VoRrGTrRfl0QAly3bPTdRpozDJzhOIcm4N3nHZvXU6VjsgQokZwsY0mUzacAN5kOK8Zp1LdEc57zNziXOO05Khrrtsdi6v6L2hp3S3y6L7Kxo+AsCVdGWBNxDWgkkyDQJknIAXrs9BdhpgPpZ/7LTL/ADeLeDfVZUK3LiJq2WxhzI42EHvNVgc536WAuPoE47RFKAmaPGl/Y79l63RaMyE0Mhsaxo/K0ADkiqwtMu7Kj1j7I8TES2ThIi8GwjeDcizXqenNBQqU2UQSePLFHmaf/YbCvMKdQ3wIj4MUSc3HBw/K4bCorKnAsVXKz9wRVS9YYxz3BrQXOcZNaLSTsXbaF7Jw2AOpEoj/ANP8tv8A98bNi5hBy6HU7IwXJxDYk7rd1vRRsVeuMbISaJDICQ9Ak9IaKhRxKLDB/qHhcNzhapf+d46kC1SzyjzKYKpEZOxbfT/Z59G8YJfC/XK1s7g8Yb7jsWnDlA04vDLMZKSyjuPw67QkjuUU2i2CTkL4fC8bJjALu14VXcxzYjDJzSC05EWgr27s9T2Uqjw47RKsPEJnwuBk4eoWtor90dj6r6MnW07Zb10f2PUTHh7phLRRVlVsnfjdvVNc7Por5RLUm/h7lCR4Ta0y603ZdETUNy5lASj+UceqIlHvLSQDID7rGudn0QDiiT1zs+iiAossvG8dU5qxkPQKsRgkbBcgCIdI8p4dUrXOZ9SrQjMgG0ZG3BAURaNfw9wq6QpUKAwxIpDWjGU9wAF52LhdI9uohMoENkMZv8TzwBAG61QW6iFX6mTVaedv6UN/ifpGTYNHB803u3NsaPUk/wC1ebxn8ls9M6QiR4msium6qBYJCQmRZxVOzVEEalwIbri+sRmGAvl/x5rGus8WzK7mzTDwasPsdv2M7PCAwRog/jPExP8AltIsaMiReeC6dRaTtZpV8CExsGWvjvEKDWtAcQS55GIa0E+iuRiksIzpSc5ZfU2tKpcOEJxYjIYze5rB6krNHpDIgrQ3te39THBw9QtBoXsnDPjjDXRDaY0cCJFfdORdOo2ZHhEgLFwfaamOolOiCC+HBiwiBrIDNW14LWuAiw5kRJTkQ6d1kl3JbVlnUK97cYvk9gXKfiDowPgCkAeKDfK8w3EA+hk71T3ZDtE2mwS4gNiwyGxYYuBPlc3+lwExuIwW8c0ESImMjaFxKKksHkW4Sz6HKdktAalmseP4rx/g0/l35nhgumZAARZLmtJ6ajxIr6NQmtGrIbFpTwXtY8gHVw4Y875GZJ8IuvSEElhHspOcss6UBZK840nSzAeWxqfTHRRe1kSGwNnaJsDag3EFbXsr2v1sXu0dwLnf6MaQaYhFpY9oMg+VxFjrbAvcrOA6pKO7sdVSKOCDYCDYWm0EG+YXmXafQvdogLP9J/l/pOLD1By3L1VaXtFo8RoUSHK0ibdj22t/biVFbWpI7oscJex5Wu3/AAn0jViR6KTY4axm8Sa+XAtPArhmOnIotEp0SjxWxoTqrhMTsxEjfsKrUWeHNSLt9fiQcT3ilYcfZAXB6O0zpSQiPhmIy+T4Yu2SkQuv7O6ehUoEVQyI3zQz6TBxE+IxWxVqoTeOj9zHs004LPVextqLcd/sEZKx7DZZZhYh1zmfUqyVy0fzH5gqJmC0EAkTOZtxRNWMh6BAJKJ3VjIegWEBdUi+U7ikpKzBaN46oCs0SAfEPmBTipGu4jqEBwulAafTXQiSINHsIFk3XGW0nwzwDTmttEEKE3VshsDReKol9VqOxL5mlfqrgn1f7zR6Y6xZNfmzN9WauzzbOyOV7U0KG0iJCAYHTDoYuBlYWjAZj90t2JiAU2BPGuOJhukgaUeTEMz8NvzckKLSDCiMiNvhuDhtqkGXEWcVUsaVmV6l1w8jiezUmMGMc8tc6qJ1WNLnHc0XrjhHjUnSdG11HdAZDgRokKHELS9zi5kNznNaSGyBsE537l2UCM17WvYZteA5pzDhMcitRp2GIUai043UcuZFP/QjCq53+x4Y4/0hy0YYyZOcHO/iXpeNRqRR+7xDDLYTrRK57rbCCD5B6LyeJWe4ucS5ziS5xMySbSSV69+JVArR4URwm0w6oP8AU1zj0cFwNI0E6c2EVcjeFDbZtsaZpaandTGUTefhNSSykvhG6JDPqw1hyrL1leYfh5owilh2ENji47XCo3qfQr05eweUVdVHbZgQ0/TzR6NHjtbWdDYSxt9Z5sYJYzcQpoSgw6BBgQojxWcapiOI8cV4dEiOJzc4G3ciaUgV2Bv/AFIJO5kZjj0Wo/FIHu0Iys1wB3OY8dZDip4vbFyK8Y7pqHqcH+LWmmRqW2HBkRBZVfEb+ZziDVniGy9XFcW2sWmV4BINxBba0g5zC6Gk6EmJsInkbuErlfQnZ58WPDhGXiNsrg0WvP8AiD6qr4ym89zV8CVUcPokeudn6I+HCZrKRGjFzWu/jasls2gyBYxs95mU1SDaN4TEslrtKUoQ2uiG5jS48BZz6qWTMuPLPJY7QHvAuD3Abg4gLYaHYzWAuvba3KYN/BauHtvvO/FOUXzslmPryWdW/MmbPseiUDS7ifEZ78Ut2kZqXQafBscHAPA/NMG/eJtO8LW6MJmN62HauOG0MA3viNAH9prHkOav3Lyt+hTnBRsWO/H8HYmMHhr23OaHDcbQsTQeygPdKPO/Vs/8GrbLTg8xTMeSxJoHR/KOPVEScceI/MAhyXRybBRa+SygM1DkfQrLWmYsN4wKdVYvlO4oCawZj1CHGeCLDM2WC3FLK8DzD5ggPO6dSHaO0g9xaTCjTdLNrjMyn+Zrp2ZEZrcR6bR3tLmR4ZabZl7QW7HNJmOK6TtBoOFTIWriiRFrXjzMdmP2xXmGk+xFMgnww9c3B8OU+LCZjhPesy2qyptxWV9GnTbCeNzw/sU0xGhuiThmYxOBOzYtXHGKZpWjo8EB0aE+GHGQLxKZAnL0SjWviPaxjS5zjINFpJKz55cuVyaKaxlM67sdp9zIfd3kybMsOw2lvA9Vv26cdaC0EZG2w5rmYXZ50ENe5x1n6Wyk2V4JPmyR/EJzB3Zk3D6/stCqLUeTnwa5co6dtGhx4Ao9WcMeQOPjhkTlVfbOU5AHCya54djqRWIrsDcHOJJl/a0X8VvdBVpCY9LvT5cttTqRq2Vg2s4kNa26bnGQE8BmcgUnFT6lPxJ0SagxfQuiWUZlRlpNr3m9xw3AYBbBain6RMDVtiUiAHvsbDfOHXM7mvrGWUyFsKHSREBsLXNNVzDe1ww25g3EIlgrSk5PLCvbMEHESVdL0FlKgPgPMqwvycLQRxSv/wCiD/pw4kRosL2BtWzIkitwTFGpDYjazTZcQQQQReCDaCu4yxwctc5PNYugKZCiarUufk9vlIzJPlXX9lNAOo4MWLLWuEpC0MbiJ4k2T3ST+l6aWCTTb8kudOk4hM63CaijTFPKNLddfXhvg7GI6QmuE7daVsFHabXSdElg0eVu8m3cBmtqNKRHNcGSLgDVDvLPCa88plcPfrZ6yc3Vr5nH5YotRJxWDimjbLzdjDAiQqRUIN+zZvQ2umthoHs/EppiiG5rdWAZunIl05CY3EqtCMnJKPUsymoLLZutG6dozRN1ef6Q2Z9Zy4peJGi6TpMOE1pawWBotEOH+dzjmQJb5AJygfhvHcf4keGxovLA554A1QF6BoDQMGiMqQhafM82uedp9hYFfhRbY/zOEUbtVXHmLy/obooDW1fKBIAGywAAdEfWDMeoS9Jv4e5QlqGUEiiZJFozFuCpUOR9CmqP5Rx6oiARqHI+hWU6ogB69ufIqr4oIIBtNmOKWWWXjeOqAtqXZdFljC0gkSA+ybQ6R5Tw6oCa9ufIocV1aQbab8uqAi0a/h7hAaXtbod1IosRgbN7fGy617JmXETHFajsV2eFHhiNEH8aIMf5bT+UZE4+mC7ta+kw6p2H4VU1FKct5Zqtaj4fYQplEDxYBP8AdaxmhDObpLerCgyTxtlFYQKj0cMEgiOaDKeBmN93uhU2lw4LHRIrwxjRMudYAuYj/iNQm3GK/a2HIf8AIhe4bPFCc+Usk7cdihpBzIjY2qiMaWmba7XNJmLAQQQZ2jNbui6IDYDILor3EQ4UN8W50QQpAk32kTGciufb+JdCxbHG0saejimYP4h6Pd/Oc3+6FFHMAr3azp1W46P4NRoejaWiU6tGLoFHhOIDGua2EYbT4WshtJrzbibtly7hrTrnEDwljZ7XVnS41fZJUPtLQ4tkOlwXH9NcNd/i6RW2XLI5Z7rBou0lGcRNuyZyFx4rlHQ3NnO+wAWyn+wn1K9FiMDgQbitW/QjJzkfVdJl3T6lQjtkaXQkB05Zn13rY9oNAw4zQHWOAk2IPM05bRsW3otEay4Wq1M8pXE0pLDIrb3KeUeOaRob6O90OIJEWzFzm4OGxeqdiNCuo9FZWbJ8T+I+6yflHBsuJKqNCQ6U+GYgmITq4OcvynMEyJGwLrQu9Jp9rc3/AAQarUb4qPyLQvDOtZPjduRde3PkUOl4cfZAWgUQsUVjNtouy6qupdl0RqLcd/sEZAAhxA0SNhH3V9e3PkUvH8x+YKiAb17c+RWEqogC93OzmpqSLbLLfRNKsXyncUAPvAyPJVfEreEC057LUBXgeYfMEBbu52c1lrahmd1nzYmUGlXDf7FATvAyPJDijWWDDPbl6ISPRMeHugNdEmw1XcDgdyuCtjSIDXiq4WdFpqRBdCMj4m4O/dUrKnHldCzCalx3Fe0eiG0ujxKO41a0i136XtNZhliJi1eKaT0bEo8Qwo7ajxxDh+prvzDb7r3eHHn8tQNJ6Mg0pgZHhh4BmJ2FpzDhaPdcRnguUah1cPoeLUHQD4orO/htN0xNxGxuHFF0noGHChOeHum2V8pEkgSkBYvS6V2WP8uICMniR/yH7LT6W7GUmM1rGuhNk4EkudcAcA221S7kaC1NTWcnmOpwIXSdhDS20mHDojnVKzTFZaYQhzFcuFzTK6UjOS63Rv4awhbSIzon9EMatvF0y70ku0oNChwWCHBhthsH5WiXEm8naVy5or36uDjtisjCiiFEpDRjPcoTOCJZwMVwYzC84cVmEHRSALG5/L1uKNR2sFVo3nEnMqWupz5fQ4nNR/cDAg6oDK6y+Zx5I3eBkeSlKuG/2KWV5LBWDP8AHdhnt+yx3c7OatRMeHumEAux1Sw77PmxW7wMjyQ6Tfw9yhIAphl3iFxz2WKd3OzmjUfyjj1REAr3c7OaiaUQC/ednP6LBjzslfZfmgrLLxvHVAG7tt5fVYMKr4pzlhdfYmUOkeU8OqAH3nZz+ixWr2XY57PdBRaNfw9wgLd228vqseTbPhd90yl6Xhx9kBO87Of0WKte27CV+33QUzRbjv8AYIBKNokG1rpHdZ1sSL4cRhkRPaLV0KTj+Y/MFDKiL56EkbZI1ApmzmrimjJPuYDeAd4BRmUCGQDUFw2KJ6eXZknjL0NUaZkEN1LdsW6Gj4f6B1S7GAXADcAEWnl3Y8Zehrmwoj895sCfgaIAtc6eyVnW1GZeN46p5SxoiuvJxK2TFtVUtywlLYs952c/oiUjynh1SimIg1avZdjns91nu23l9VWjX8PcJpALeTbPhd91nvOzn9FKXhx9kBAGq17bsM9vus9228vqrUW47/YIyAWESr4ZTljdfas952c/ohx/MfmCogD952c/oogKIBnu4zPJYdBAtmbLcMEdVi+U7igF+8HZzUEQu8JuOWy1CV4HmHzBAG7uMzyVXtqWjdb82JhBpVw3+xQA+8HZzWWeO/DLb9kFHomPD3QFu7jM8lRzqhkN9vzYmUrSb+HuUBO8HZzVmQ63iN5y2WICbo/lHHqgK93GZ5IeuIssss9E0kX3neeqAIaQdnNE7sMzy/ZKlbBAAdBAtmbLcMFTvB2c0xF8p3FJIAoiF3hNxy2WondxmeSDA8w+YJxALvbUtG635sVe8HZzRKVcN/sUsgDM8d+GW37K/dxmeSrRMeHumEAs51QyG+35sWO8HZzUpN/D3KEgDsh1vEbzlssVu7jM8laj+UceqIgA93GZ5KIyiAT1zs+iyIhNhNhswxQ1ll43jqgGtQ3LmVSJDDRMWEfZHQ6R5Tw6oBfXOz6K0I1jJ1ovy6ISLRr+HuEAbUNy5lCiirKrZPjdvTKXpWHH2QA9c7PoiQm1pl1puy6ICZotx3+wQFtQ3LmUB7y0kAyA+6bScfzH5ggJrnZ9EZkIEAkWm3HFLJ2FcNwQFdQ3LmUuIzs+icWvCAKIhNhNhswxR9Q3LmUqy8bx1TyABEhhomLCPsha52fRMUjynh1SiALCNYydaL8uiNqG5cyg0a/h7hNIBaKKsqtk+N29U1zs+iJSsOPsgIA8JtaZdabsuiJqG5cyq0W47/YIyAUe8tJAMgPusa52fRSP5j8wVEBfXOz6KKiiAiyy8bx1WVEA6h0jynh1WFEAqi0a/h7hRRANJelYcfZRRAATNFuO/wBgoogDJOP5j8wUUQFE7CuG4LCiAuteFlRAZZeN46p5RRADpHlPDqlFFEAWjX8PcJpRRAL0rDj7ICiiAZotx3+wRlFEAnH8x+YKiiiAiiiiA//Z"
            alt=""
          />
          <h2 className="text-lg font-medium">Gunjan Bandari</h2>
        </div>
        <h5 className="text-lg font-semibold  ">2.2 Km</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>

            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20 </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Link
            to="/captain-home"
            onClick={() => {
              console.log("ahaaahha")
            }}
            className="w-full mt-10 bg-green-600 flex justify-center text-lg text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className="text-center font-light mt-5">Click on finish ride button, if you have completed it!</p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
