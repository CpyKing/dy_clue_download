function getCookieValue(cookieName) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const parts = cookie.split('=');
        if (parts[0] === cookieName) {
            return parts[1];
        }
    }
    return null;
}
const x_csrftoken = getCookieValue('feiyu_csrf_token');
const headers = {
    'host': 'leads.cluerich.com',
    // ':method': 'POST',
    // ':path': '/bff/statistic/live-screen/clue-detail',
    // ':scheme': 'https',
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'content-length': '120',
    'content-type': 'application/json;charset=utf-8',
    // 'cookie': 's_v_web_id=verify_m4s284pc_BaAB9dPO_WGpv_4fPX_9ULc_Y2FootTA43hU; passport_csrf_token=b4d0368202440d5168462e8eb0b5cedc; passport_csrf_token_default=b4d0368202440d5168462e8eb0b5cedc; is_hit_partitioned_cookie_canary_ss=true; is_hit_partitioned_cookie_canary_ss=true; is_staff_user=false; is_hit_partitioned_cookie_canary=true; is_hit_partitioned_cookie_canary=true; store-region=cn-bj; store-region-src=uid; bd_ticket_guard_client_web_domain=2; ttcid=e42ece3ac4d147bea1a758ee1b11e38018; tt_scid=wDNhQY5dDpbUXXnvlZ3LvQ9tY2h3vSCEl7mClVbmdFBvr8K7UqRJjQbQTt47kYgb1682; n_mh=n2fIACyLUl2iRKD2PyOpJ1OlnMD0kj2uZF4Qm3E-iws; sso_uid_tt=c068036a01ad454219dafee29dd4d99a; sso_uid_tt_ss=c068036a01ad454219dafee29dd4d99a; toutiao_sso_user=3cb3d69b9802080f87b18429b93fc244; toutiao_sso_user_ss=3cb3d69b9802080f87b18429b93fc244; sid_ucp_sso_v1=1.0.0-KDA0ODYwYjY0OWI2M2VmZjI1Y2Y5MDE5NzBlNDAwYWZkOGE3NGJjMTcKHgjIvoC0mc2gAxDnt4u7BhimDCAMMMDQ5aQGOAhAJhoCbGYiIDNjYjNkNjliOTgwMjA4MGY4N2IxODQyOWI5M2ZjMjQ0; ssid_ucp_sso_v1=1.0.0-KDA0ODYwYjY0OWI2M2VmZjI1Y2Y5MDE5NzBlNDAwYWZkOGE3NGJjMTcKHgjIvoC0mc2gAxDnt4u7BhimDCAMMMDQ5aQGOAhAJhoCbGYiIDNjYjNkNjliOTgwMjA4MGY4N2IxODQyOWI5M2ZjMjQ0; passport_auth_status=9e0746eb2c208e7c98370ff185a10df3%2C336d66a6016643769d93300916bf25a3; passport_auth_status_ss=9e0746eb2c208e7c98370ff185a10df3%2C336d66a6016643769d93300916bf25a3; uid_tt=6b2310fa9394731b0f5531799c16753c; uid_tt_ss=6b2310fa9394731b0f5531799c16753c; uid_tt_ss=6b2310fa9394731b0f5531799c16753c; sid_tt=48f43ac2ecf52953bf0693340ad9a95a; sessionid=48f43ac2ecf52953bf0693340ad9a95a; sessionid_ss=48f43ac2ecf52953bf0693340ad9a95a; sessionid_ss=48f43ac2ecf52953bf0693340ad9a95a; sid_guard=48f43ac2ecf52953bf0693340ad9a95a%7C1734532073%7C5184000%7CSun%2C+16-Feb-2025+14%3A27%3A53+GMT; sid_ucp_v1=1.0.0-KGU1NTUzN2QxNWM0Mjg5MTJhZDcyNDI4MjJjZTBjZjhiZDc3YTMwMGMKGgjIvoC0mc2gAxDpt4u7BhimDCAMOAhAJkgEGgJsZiIgNDhmNDNhYzJlY2Y1Mjk1M2JmMDY5MzM0MGFkOWE5NWE; sid_ucp_v1=1.0.0-KGU1NTUzN2QxNWM0Mjg5MTJhZDcyNDI4MjJjZTBjZjhiZDc3YTMwMGMKGgjIvoC0mc2gAxDpt4u7BhimDCAMOAhAJkgEGgJsZiIgNDhmNDNhYzJlY2Y1Mjk1M2JmMDY5MzM0MGFkOWE5NWE; ssid_ucp_v1=1.0.0-KGU1NTUzN2QxNWM0Mjg5MTJhZDcyNDI4MjJjZTBjZjhiZDc3YTMwMGMKGgjIvoC0mc2gAxDpt4u7BhimDCAMOAhAJkgEGgJsZiIgNDhmNDNhYzJlY2Y1Mjk1M2JmMDY5MzM0MGFkOWE5NWE; ssid_ucp_v1=1.0.0-KGU1NTUzN2QxNWM0Mjg5MTJhZDcyNDI4MjJjZTBjZjhiZDc3YTMwMGMKGgjIvoC0mc2gAxDpt4u7BhimDCAMOAhAJkgEGgJsZiIgNDhmNDNhYzJlY2Y1Mjk1M2JmMDY5MzM0MGFkOWE5NWE; leads_pc_ies_user_id=602976513960423; _bd_ticket_crypt_doamin=3; _bd_ticket_crypt_cookie=3787b0af75f0b90bcb06a772c84acda7; __security_server_data_status=1; odin_tt=ecca8cb5a72c1aec6a7c8fff9bd3e885cb71fcea3d799ea2855048b3f119376898ad0f2e43ac5800f2b71118acbbab07; gfkadpd=337122,23937; csrf_session_id=6633353eeb5926eea5d3eef0a622e090; feiyu_csrf_token=ymU-WfKQ8mLLMfBz40fGCbhi; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCRUxrYnlzVldveDc2Qkppcko5MXUxRE9YOG1UekEzYUhneUtVUnNvdU8wRkhtWVFVMkhqN0tHZjh4TDJ0UVo0MENYbmgzazNzZFJERHF1Qk5Pa1MxY1E9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D; ttwid=1%7CDfqL773KThApxNAtv62AGlj3MuDCA38fR55QUrahFEY%7C1734746037%7Cc89eed4fe9b2cf6b3ee5702acd7081a59717c663ee789dca08c768af15f56648',
    'cookie': document.cookie,
    'origin': 'https://leads.cluerich.com',
    'priority': 'u=1, i',
    'referer': 'https://leads.cluerich.com/pc/analysis/live-screen?room_id=7450248528695135028&fullscreen=0',
    'sec-ch-ua': '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'traceparent': '03-6d86896837d34208b9e7032d519c84e6-af5d47da8d2674db-01',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
    'x-client-tz': 'Asia/Shanghai',
    'x-csrftoken': x_csrftoken,
    'x-edition': 'leads',
    'x-request-by': 'fetch'
};

async function getIesUidList(){
    var requestBody = {roomId: ""};
    try{
        const response = await fetch('https://leads.cluerich.com/bff/statistic/live-screen/accounts', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: headers
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data.employeeList;
        
    } catch (error) {
        console.error(error);
        return null;
    }
}


async function getRoomIdList(iesUid){
    var requestBody = {iesUid: iesUid};
    try{
        const response = await fetch('https://leads.cluerich.com/bff/statistic/live-screen/room-lists', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: headers
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data.roomLists;
    } catch (error) {
        console.error(error);
        return null;
    }
}


function isYesterday(targetDate) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const target = new Date(targetDate);
    
    return (
        target.getFullYear() === yesterday.getFullYear() &&
        target.getMonth() === yesterday.getMonth() &&
        target.getDate() === yesterday.getDate()
    );
}

async function downloadClue(roomName, filename, roomId, startTime, endTime){
    
    var requestBody = {"startTimeMs":startTime,"endTimeMs":endTime,"roomId": roomId,"dimensions":["stat_time_minute"]}
       

    try {
        const response = await fetch('https://leads.cluerich.com/bff/statistic/live-screen/clue-detail', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: headers
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // 处理下载的逻辑
        var lp_screen_clue_id = ''
        var tags = '';
        var clue_list = data.data.list;
        if (clue_list == null || clue_list.length == 0){
            return;
        }
        
        var write_content = '';
        for(var i = 0; i < clue_list.length; i++){
            
            lp_screen_clue_id = clue_list[i]['fields']['lp_screen_clue_id'];
            tags = clue_list[i]['fields']['tags'];
            if(tags != undefined){
                if(tags.includes('短停留') || tags.includes('短暂留')){
                    tags = '短停留';
                }else if(tags.includes('中') || tags.includes('中暂留')){
                    tags = '中停留';
                }else if(tags.includes('长') || tags.includes('长暂留')){
                    tags = '长停留';
                }else{
                    tags = '';
                }
            }else{
                tags = '';
            }
            
            write_content =  write_content + roomName + ',' + lp_screen_clue_id + ',' + tags + '\n';
        }
        const content = '模拟写入文件的内容';
        const blob = new Blob([write_content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename + '.txt';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        console.log(filename, clue_list.length);
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

async function main() {
    console.log('BEGIN...')
    try {
        const iesUidList = await getIesUidList();
        if (iesUidList) {
            for (const iesUid of iesUidList) {
                const roomIdList = await getRoomIdList(iesUid['iesUid']);
                if (roomIdList) {
                    for (const roomId of roomIdList) {
                        if (isYesterday(roomId['liveStartTime'] * 1000)){
                            var date = new Date(parseInt(roomId['liveStartTime'], 10) * 1000);
                            var filename = iesUid['iesName'] + '-' + date.toString();
                            await downloadClue(iesUid['iesName'], filename, roomId['roomId'],
                                            parseInt(roomId['liveStartTime'], 10) * 1000,
                                            parseInt(roomId['liveEndTime'], 10) * 1000);
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error('发生错误:', error);
    }
}

// INTO MAIN FUNCTION
main();