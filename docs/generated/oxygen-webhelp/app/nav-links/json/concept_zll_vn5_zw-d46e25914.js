define({"topics" : [{"title":"Update <span class=\"ph\">Control Hub</span> On-Premises\n            ","shortdesc":"\n               <p class=\"shortdesc\">By default, <span class=\"ph\">StreamSets Control Hub</span>         on-premises can work with registered <span class=\"ph\">Data Collector</span>s from         version 2.1.0.0 to the current version of <span class=\"ph\">Control Hub</span>. If you         use <span class=\"ph\">Control Hub</span>         on-premises and you upgrade registered <span class=\"ph\">Data Collector</span>s to a         version higher than your current version of <span class=\"ph\">Control Hub</span>, you         must modify the <span class=\"ph\">Data Collector</span> version         range within your <span class=\"ph\">Control Hub</span>         installation.\n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_dzn_cdy_1cb","attributes": {"data-id":"concept_dzn_cdy_1cb",},"menu": {"hasChildren":false,},"tocID":"concept_dzn_cdy_1cb-d46e26248","topics":[]},{"title":"Update Pipelines using Legacy Stage Libraries","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_wnl_zk4_5bb","attributes": {"data-id":"concept_wnl_zk4_5bb",},"menu": {"hasChildren":false,},"tocID":"concept_wnl_zk4_5bb-d46e26301","topics":[]},{"title":"Upgrade Enterprise Stage Libraries","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#task_rql_l3y_s3b","attributes": {"data-id":"task_rql_l3y_s3b",},"menu": {"hasChildren":false,},"tocID":"task_rql_l3y_s3b-d46e26333","topics":[]},{"title":"Review Processing of MySQL Data","shortdesc":"\n               <p class=\"shortdesc\"></p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_q1s_vcg_kmb","attributes": {"data-id":"concept_q1s_vcg_kmb",},"menu": {"hasChildren":false,},"tocID":"concept_q1s_vcg_kmb-d46e26375","topics":[]},{"title":"Update Elasticsearch Security Properties (Optional)","shortdesc":"\n               <p class=\"shortdesc\"></p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_xb1_zvx_gmb","attributes": {"data-id":"concept_xb1_zvx_gmb",},"menu": {"hasChildren":false,},"tocID":"concept_xb1_zvx_gmb-d46e26429","topics":[]},{"title":"Update Syslog Pipelines","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_hkf_ylq_xhb","attributes": {"data-id":"concept_hkf_ylq_xhb",},"menu": {"hasChildren":false,},"tocID":"concept_hkf_ylq_xhb-d46e26494","topics":[]},{"title":"JDBC Tee and JDBC Producer Cache Change","shortdesc":"\n               <p class=\"shortdesc\">Starting with version 3.9.0, the JDBC Tee processor and the JDBC Producer destination         no longer cache prepared statements\n                  when performing single-row operations. As a result, the         Max Cache Size Per Batch property has been removed from both\n                  stages.\n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_azm_ncy_vhb","attributes": {"data-id":"concept_azm_ncy_vhb",},"menu": {"hasChildren":false,},"tocID":"concept_azm_ncy_vhb-d46e26566","topics":[]},{"title":"Pipeline Export","shortdesc":"\n               <p class=\"shortdesc\">Starting with version 3.8.0, <span class=\"ph\">Data Collector</span> has         changed the behavior of the pipeline <span class=\"ph uicontrol\">Export</span> option. <span class=\"ph\">Data Collector</span> now         strips all plain text credentials from exported pipelines. Previously, <span class=\"ph\">Data Collector</span>         included plain text credentials in exported pipelines.\n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_d2k_ssk_1hb","attributes": {"data-id":"concept_d2k_ssk_1hb",},"menu": {"hasChildren":false,},"tocID":"concept_d2k_ssk_1hb-d46e26652","topics":[]},{"title":"Update TCP Server Pipelines","shortdesc":"\n               <p class=\"shortdesc\">Starting with version 3.7.2, the TCP Server origin has changed the valid values for         the Read Timeout property. The\n                  property now allows a minimum of 1 second and a maximum of         3,600 seconds.\n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_k1s_j4s_rgb","attributes": {"data-id":"concept_k1s_j4s_rgb",},"menu": {"hasChildren":false,},"tocID":"concept_k1s_j4s_rgb-d46e26760","topics":[]},{"title":"Update Cluster Pipelines","shortdesc":"\n               <p class=\"shortdesc\">Starting with version 3.7.0, <span class=\"ph\">Data Collector</span> now         requires that the Java temporary directory on the gateway node in the cluster is         writable.\n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_clv_tzk_cgb","attributes": {"data-id":"concept_clv_tzk_cgb",},"menu": {"hasChildren":false,},"tocID":"concept_clv_tzk_cgb-d46e26866","topics":[]},{"title":"Duplicate Data in Oracle CDC Client Pipelines ","shortdesc":"\n               <p class=\"shortdesc\">Starting with version 3.7.0, pipelines that use the Oracle CDC Client origin can         produce some duplicate data. </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_k53_vhk_cgb","attributes": {"data-id":"concept_k53_vhk_cgb",},"menu": {"hasChildren":false,},"tocID":"concept_k53_vhk_cgb-d46e26986","topics":[]},{"title":"Update Pipelines that Use Kafka Consumer or Kafka Multitopic Consumer Origins","shortdesc":"\n               <p class=\"shortdesc\"></p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#task_jxx_w4c_cgb","attributes": {"data-id":"task_jxx_w4c_cgb",},"menu": {"hasChildren":false,},"tocID":"task_jxx_w4c_cgb-d46e27112","topics":[]},{"title":"Update JDBC Pipelines","shortdesc":"\n               <p class=\"shortdesc\">Starting with version 3.5.0, <span class=\"ph\">Data Collector</span>         requires the maximum lifetime for a connection to be at least 30 minutes in stages that use         a JDBC connection.\n                  <span class=\"ph\">Data Collector</span> does         not validate stages with lower non-zero values configured. \n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#task_tzp_2dd_vhb","attributes": {"data-id":"task_tzp_2dd_vhb",},"menu": {"hasChildren":false,},"tocID":"task_tzp_2dd_vhb-d46e27247","topics":[]},{"title":"Update Spark Executor with Databricks Pipelines","shortdesc":"\n               <p class=\"shortdesc\">Starting with version 3.5.0, <span class=\"ph\">Data Collector</span>         introduces a new Databricks Job Launcher executor and has removed the ability to use the         Spark executor with\n                  Databricks.\n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_b34_vly_cfb","attributes": {"data-id":"concept_b34_vly_cfb",},"menu": {"hasChildren":false,},"tocID":"concept_b34_vly_cfb-d46e27399","topics":[]},{"title":"Update Pipelines to Use Spark 2.1 or Later","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_jzf_b3b_xdb","attributes": {"data-id":"concept_jzf_b3b_xdb",},"menu": {"hasChildren":false,},"tocID":"concept_jzf_b3b_xdb-d46e27558","topics":[]},{"title":"Update Value Replacer Pipelines","shortdesc":"\n               <p class=\"shortdesc\">Starting with version 3.1.0.0, <span class=\"ph\">Data Collector</span>         introduces a new Field Replacer processor and has deprecated the Value Replacer processor. \n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_hxf_3yd_qcb","attributes": {"data-id":"concept_hxf_3yd_qcb",},"menu": {"hasChildren":false,},"tocID":"concept_hxf_3yd_qcb-d46e27721","topics":[]},{"title":"Update Einstein Analytics Pipelines","shortdesc":"\n               <p class=\"shortdesc\">Starting with version 3.1.0.0, the Einstein Analytics destination introduces a new         append operation that lets you\n                  combine data into a single dataset. Configuring the         destination to use dataflows to combine data into a single dataset\n                  has been         deprecated.\n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_dzq_djt_vcb","attributes": {"data-id":"concept_dzq_djt_vcb",},"menu": {"hasChildren":false,},"tocID":"concept_dzq_djt_vcb-d46e27901","topics":[]},{"title":"Disable Cloudera Navigator Integration","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_wnp_scs_wbb","attributes": {"data-id":"concept_wnp_scs_wbb",},"menu": {"hasChildren":false,},"tocID":"concept_wnp_scs_wbb-d46e28088","topics":[]},{"title":"JDBC Multitable Consumer Query Interval Change","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_hky_ljl_wbb","attributes": {"data-id":"concept_hky_ljl_wbb",},"menu": {"hasChildren":false,},"tocID":"concept_hky_ljl_wbb-d46e28282","topics":[]},{"title":"Update JDBC Query Consumer Pipelines used for SQL Server CDC Data","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_ys3_bjl_wbb","attributes": {"data-id":"concept_ys3_bjl_wbb",},"menu": {"hasChildren":false,},"tocID":"concept_ys3_bjl_wbb-d46e28486","topics":[]},{"title":"Update MongoDB Destination Upsert Pipelines","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_ncs_5jl_wbb","attributes": {"data-id":"concept_ncs_5jl_wbb",},"menu": {"hasChildren":false,},"tocID":"concept_ncs_5jl_wbb-d46e28700","topics":[]},{"title":"Time Zones in Stages","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_o1s_gkl_wbb","attributes": {"data-id":"concept_o1s_gkl_wbb",},"menu": {"hasChildren":false,},"tocID":"concept_o1s_gkl_wbb-d46e28925","topics":[]},{"title":"Update Kudu Pipelines","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_epj_gqd_rx","attributes": {"data-id":"concept_epj_gqd_rx",},"menu": {"hasChildren":false,},"tocID":"concept_epj_gqd_rx-d46e29159","topics":[]},{"title":"Update JDBC Multitable Consumer Pipelines","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_hhc_15s_dbb","attributes": {"data-id":"concept_hhc_15s_dbb",},"menu": {"hasChildren":false,},"tocID":"concept_hhc_15s_dbb-d46e29403","topics":[]},{"title":"Update Vault Pipelines","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_yyv_v45_zw","attributes": {"data-id":"concept_yyv_v45_zw",},"menu": {"hasChildren":false,},"tocID":"concept_yyv_v45_zw-d46e29657","topics":[]},{"title":"Configure JDBC Producer Schema Names","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_cmh_ryd_pz","attributes": {"data-id":"concept_cmh_ryd_pz",},"menu": {"hasChildren":false,},"tocID":"concept_cmh_ryd_pz-d46e29921","topics":[]},{"title":"Evaluate Precondition Error Handling","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_gk3_s5l_nz","attributes": {"data-id":"concept_gk3_s5l_nz",},"menu": {"hasChildren":false,},"tocID":"concept_gk3_s5l_nz-d46e30195","topics":[]},{"title":"Authentication for Docker Image","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_czx_bbn_gz","attributes": {"data-id":"concept_czx_bbn_gz",},"menu": {"hasChildren":false,},"tocID":"concept_czx_bbn_gz-d46e30479","topics":[]},{"title":"Configure Pipeline Permissions","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#concept_zbn_fpw_xy","attributes": {"data-id":"concept_zbn_fpw_xy",},"menu": {"hasChildren":false,},"tocID":"concept_zbn_fpw_xy-d46e30773","topics":[]},{"title":"Update Elasticsearch Pipelines","shortdesc":"\n               <p class=\"shortdesc\"><span class=\"ph\">Data Collector</span>         version 2.3.0.0 includes an enhanced Elasticsearch destination that uses the Elasticsearch         HTTP API. To upgrade\n                  pipelines that use the Elasticsearch destination from <span class=\"ph\">Data Collector</span>         versions earlier than 2.3.0.0, you must review the value of the Default Operation         property.\n               </p>\n            ","href":"datacollector\/UserGuide\/Upgrade\/PostUpgrade.html#task_afy_k12_ry","attributes": {"data-id":"task_afy_k12_ry",},"menu": {"hasChildren":false,},"tocID":"task_afy_k12_ry-d46e31078","topics":[]}]});